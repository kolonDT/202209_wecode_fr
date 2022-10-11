import { React, useState, useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import TemplateList from './TemplateList';
import FilterBox from '../../components/FilterBox';
import axios from 'axios';
import { API } from '../../config';
import NoneTemplete from './NoneTemplete';
import * as S from './MainStyle';

const Main = () => {
  const navigate = useNavigate();
  const [nothing, setNothing] = useState(false); // 템플릿이 하나도 없을 때 나오는 컴포넌트
  const [template, setTemplate] = useState([]); // 템플릿 데이터

  // const [tohidePagination, setTohidePagination] = useState();
  const [totalTemplate, setTotalTemplate] = useState(''); // 템플릿 전체 갯수(only count)
  const [pageNumber, setPageNumber] = useState(0); // 페이지에서 보여지는 페이지네이션 넘버링 인덱스값 ex) [[1,2,3,4,5],[6,7]] -> 0 or 1
  const [isvisible, setIsvisible] = useState(false); // 필터 : 진행중 / 완료 / 대기중 / 전체 모달을 보여주는 state
  const [filter, setFilter] = useState('전체'); // 필터 : 진행중 / 완료 / 대기중 / 전체 눌렀을 때 state
  const [search, setSearch] = useState(''); // 검색값 state

  const [page, setPage] = useState(1); // 현재 보여지는 페이지
  const limit = 10; // 페이지네이션 limit 값

  const adminToken = localStorage.getItem('token');

  const modalRef = useRef();

  // 진행중 / 완료 / 대기중 선택시 모달 바깥 영역 눌렀을 때 닫히게 하는 함수
  // modalRef를 모달 자체에 걸어 모달이 자체가 아닌 곳을 눌렀을 때 모달이 닫히게 했습니다
  // 이럴 때 항상 모달 전체를 계속 바라봐야하므로 모달이 실행될때 onClick 이벤트가 발생하도록 했습니다
  const modalClose = e => {
    if (isvisible && modalRef.current !== e.target) {
      setIsvisible(false);
    }
  };

  // URL 재사용을 위한 함수
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

  // 가장 처음 시작되는 함수, getData에 filter, search을 넘겨 데이터를 받아 각각 state 에 넘겼습니다
  const getPaginationData = async pageNum => {
    if (adminToken) {
      try {
        const res = await getData(filter, search, pageNum);
        const { mainPageCount, mainPageList } = res.data;
        if (mainPageCount === '0') {
          setNothing(true);
          setTotalTemplate(mainPageCount);
          setPage(1);
        } else {
          setTotalTemplate(mainPageCount);
          setTemplate(mainPageList);
          setPage(page);
          setFilter(filter);
        }
      } catch (err) {
        throw new Error(err);
      }
    } else {
      alert('로그인이 필요합니다');
      navigate('/admin/login');
    }
  };

  // 진행중 / 완료 / 대기중 / 전체 눌렀을 때 데이터 보여주는 함수
  const toFilter = async e => {
    try {
      setFilter(e.target.value);
      setIsvisible(false);
      const res = await getData(e.target.value, search, 1);
      const { mainPageCount, mainPageList } = res.data;
      if (mainPageCount === '0') {
        setNothing(true);
        setTotalTemplate(mainPageCount);
        setTemplate(mainPageList);
      } else {
        setNothing(false);
        setTotalTemplate(mainPageCount);
        setTemplate(mainPageList);
        setPage(1);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  // 검색할 때 데이터 보여주는 함수
  const toSearch = async e => {
    e.preventDefault();
    try {
      const res = await getData(filter, search, 1);
      const { mainPageCount, mainPageList } = res.data;
      if (mainPageCount === '0') {
        setNothing(true);
        setTotalTemplate(mainPageCount);
        setTemplate(mainPageList);
        setPage(1);
      } else {
        setTotalTemplate(mainPageCount);
        setTemplate(mainPageList);
        setPage(1);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  // 한 페이지당 10개씩 받기 때문에 전체 갯수/10 한 후 반올림
  // paginationNumbers 라는 배열을 만들어 안에 넣었습니다
  const paginationNumber = Math.ceil(totalTemplate / limit);
  const paginationNumbers = [];
  for (let i = 0; i < paginationNumber; i++) {
    paginationNumbers.push(i + 1);
  }

  // showPagination 새 배열을 만들어
  // paginationNumbers 에 있는 숫자들을 5개씩 나누어 배열 안 배열의 형태로 만들었습니다
  const divide =
    Math.floor(paginationNumbers.length / 5) +
    (Math.floor(paginationNumbers.length % 5) > 0 ? 1 : 0);
  const showPagination = [];
  for (let i = 0; i <= divide; i++) {
    showPagination.push(paginationNumbers.splice(0, 5));
  }

  // 페이지 네이션 오른쪽 버튼을 눌렀을 때 1-5 안에 있다면 바로 6-10 으로 넘어갈 수 있고
  // 마지막 showPagination 안에 있다면 마지막 페이지라는 alert를 띄워 막았습니다
  const moveNext = pageNumber => {
    if (pageNumber === showPagination.length - 2) {
      alert('마지막 페이지입니다');
    } else {
      setPageNumber(pageNumber + 1);
      setPage(pageNumber + 6);
      getPaginationData(pageNumber + 6);
    }
  };

  // 페이지 네이션 왼쪽 버튼을 눌렀을 때 6-10에 있다면 1-5로 넘어갈 수 잇고
  // 1-5 showPagination 안에 있에 있다면 처음 페이지라는 alert를 띄워 막았습니다
  const movePrev = pageNumber => {
    if (pageNumber === 0) {
      alert('처음 페이지입니다');
    } else {
      setPageNumber(pageNumber - 1);
      setPage(pageNumber);
      getPaginationData(pageNumber);
    }
  };

  // showPagination 안에 있는 숫자를 눌렀을 때 (page, setPage) 각 페이지로 갈 수 있게 하는 함수
  const movePage = page => {
    setPage(page);
    getPaginationData(page);
  };
  const outside = isvisible && { onClick: e => modalClose(e) };
  return (
    <S.Background {...outside}>
      <Outlet />
      <S.Layout>
        <S.Filter>
          <S.StateAndPeriod ref={modalRef}>
            {/* 필터 모달 true/false*/}
            {isvisible === true && <FilterBox toFilter={toFilter} />}
            <S.State onClick={() => setIsvisible(true)}>
              {/* {total !== true &&  */}
              {filter}
            </S.State>
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
          {/* 템플릿이 하나도 없을 때 불러오는 NoneTemplete 컴포넌트 */}
          {nothing === true && <NoneTemplete />}
          <TemplateList templates={template} />
        </S.TemplateListBox>
        {template.length !== 0 ? (
          <S.Pagination>
            <S.PreButton onClick={() => movePrev(pageNumber)}>◀</S.PreButton>
            {/* showPagination 을 보여주기 위한 map */}
            {showPagination[pageNumber].map(pages => {
              return (
                <S.PageinationNum key={pages} onClick={() => movePage(pages)}>
                  {pages}
                </S.PageinationNum>
              );
            })}
            <S.NextButton onClick={() => moveNext(pageNumber)}>►</S.NextButton>
          </S.Pagination>
        ) : (
          ' '
        )}
      </S.Layout>
    </S.Background>
  );
};
export default Main;

// 필터 : 진행중 / 대기중 / 완료 / 전체 상수 데이터
export const FILTERMENU = [
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
  {
    id: 4,
    name: '전체',
  },
];
