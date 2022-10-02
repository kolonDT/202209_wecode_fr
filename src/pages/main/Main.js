import { React, useState, useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateList from './TemplateList';
import * as S from './MainStyle';
import { API } from '../../config';
import axios from 'axios';
import DropBox from '../../components/DropBox';

const Main = () => {
  const navigate = useNavigate();
  const [template, setTemplate] = useState([]); // 템플릿 데이터
  const [totalTemplate, setTotalTemplate] = useState(''); // 템플릿 전체 갯수(only count)
  const [pageNumber, setPageNumber] = useState(0); // 페이지에서 보여지는 페이지네이션 넘버링 인덱스값 [[1,2,3,4,5],[6,7]] -> 1

  const [isvisible, setIsvisible] = useState(false); // 필터 모달 보여주는 state
  const [filter, setFilter] = useState(''); // 필터 완료/대기중 state
  const [search, setSearch] = useState(''); // 검색 state

  const [page, setPage] = useState(1); // 현재 보여지는 페이지
  const limit = 10; // 페이지네이션 limit 값

  const adminToken = localStorage.getItem('token');

  const modalRef = useRef();

  const modalClose = e => {
    if (isvisible && modalRef.current === e.target) {
      setIsvisible(false);
    }
  };
  const getData = (filter, search, page) => {
    return axios.get(
      `${API.MAIN}/main/option/list?&filter=${filter}&search=${search}&pageNo=${page}&limit=${limit}`,
      {
        headers: {
          Authorization: adminToken,
        },
      }
    );
  };

  useEffect(() => {
    getPaginationData(page);
  }, []);

  const getPaginationData = async pageNum => {
    if (adminToken) {
      try {
        const res = await getData(filter, search, pageNum);
        const { mainPageCount, mainPageList } = res.data;
        setTotalTemplate(mainPageCount);
        setTemplate(mainPageList);
        setPage(page);
        setFilter(filter);
      } catch (err) {
        throw new Error(err);
      }
    } else {
      alert('로그인이 필요합니다');
      navigate('/admin/login');
    }
  };
  const togo = async e => {
    try {
      setFilter(e.target.value);
      const res = await getData(filter, search, 1);
      const { mainPageCount, mainPageList } = res.data;
      setTotalTemplate(mainPageCount);
      setTemplate(mainPageList);
      setPage(1);
    } catch (err) {
      throw new Error(err);
    }
  };

  const toSearch = async e => {
    e.preventDefault();
    try {
      const res = await getData(filter, search, 1);
      const { mainPageCount, mainPageList } = res.data;
      setTotalTemplate(mainPageCount);
      setTemplate(mainPageList);
      setPage(1);
    } catch (err) {
      throw new Error(err);
    }
  };

  const paginationNumber = Math.ceil(totalTemplate / 10);
  const paginationNumbers = [];
  for (let i = 0; i < paginationNumber; i++) {
    paginationNumbers.push(i + 1);
  }

  const divide =
    Math.floor(paginationNumbers.length / 5) +
    (Math.floor(paginationNumbers.length % 5) > 0 ? 1 : 0);
  const showPagination = [];
  for (let i = 0; i <= divide; i++) {
    showPagination.push(paginationNumbers.splice(0, 5));
  }
  const moveNext = pageNumber => {
    if (pageNumber === showPagination.length - 2) {
      alert('마지막 페이지입니다');
    } else {
      setPageNumber(pageNumber + 1);
      setPage(pageNumber + 6);
      getPaginationData(pageNumber + 6);
    }
  };

  const movePrev = pageNumber => {
    if (pageNumber === 0) {
      alert('처음 페이지입니다');
    } else {
      setPageNumber(pageNumber - 1);
      setPage(pageNumber);
      getPaginationData(pageNumber);
    }
  };

  const movePage = page => {
    setPage(page);
    getPaginationData(page);
  };

  return (
    <S.Background ref={modalRef} onClick={e => modalClose(e)}>
      <S.Layout>
        <S.Filter>
          <S.StateAndPeriod>
            {isvisible === true && <DropBox togo={togo} />}
            <S.State onClick={() => setIsvisible(true)}> 상태 </S.State>
            <S.Period> 참여기간 </S.Period>
          </S.StateAndPeriod>
          <S.SearchTemplate>
            <S.SearchImg alt="search img" src="/images/search.png" />
            <S.SearchInput
              onChange={e => {
                setSearch(e.target.value);
              }}
              placeholder=" 템플릿 검색"
              value={search}
            />
            <S.SearchButton onClick={toSearch}>찾기</S.SearchButton>
          </S.SearchTemplate>
        </S.Filter>
        <S.TemplateListBox>
          <TemplateList templates={template} />
        </S.TemplateListBox>
        <S.pagination>
          <S.PreButton onClick={() => movePrev(pageNumber)}>◀</S.PreButton>
          {showPagination[pageNumber].map(pages => {
            return (
              <S.PageinationNum key={pages} onClick={() => movePage(pages)}>
                {pages}
              </S.PageinationNum>
            );
          })}
          <S.NextButton onClick={() => moveNext(pageNumber)}>►</S.NextButton>
        </S.pagination>
      </S.Layout>
    </S.Background>
  );
};
export default Main;

export const DROPBOXMENU = [
  {
    id: 1,
    name: '진행중',
  },
  {
    id: 2,
    name: '대기중',
  },

  {
    id: 3,
    name: '완료',
  },
];
