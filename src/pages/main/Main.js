import { React, useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import TemplateList from './TemplateList';
import * as S from './MainStyle';
import { API } from '../../config';
import axios from 'axios';

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [template, setTemplate] = useState([]); // 템플릿 데이터
  const [totalTemplate, setTotalTemplate] = useState(''); // 템플릿 전체 갯수

  const [pageNumber, setPageNumber] = useState(0); // 페이지에서 보여지는 페이지네이션 넘버링 인덱스값
  const adminToken = localStorage.getItem('token');
  const [page, setPage] = useState(1); // 현재 보여지는 페이지
  const limit = 10;

  // 템플릿 전체 갯수 받는 Fetch
  useEffect(() => {
    getTemplate();
  }, [page]);

  useEffect(() => {
    fetch(`${API.MAIN}/main/list?pageNo=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: adminToken,
      },
    })
      .then(res => res.json())
      .then(result => setTemplate(result.mainPageList));
  }, [page]);

  const getTemplate = async () => {
    if (adminToken) {
      try {
        const res = await axios.get(`${API.MAIN}/main/count`, {
          headers: {
            Authorization: adminToken,
          },
        });
        const { mainPageCount } = res.data;
        // const datas = mainPageCount[0];
        // const { surveycount } = datas;
        setTotalTemplate(mainPageCount);
      } catch (err) {
        throw new Error(err);
      }
    }
  };

  const paginationNumber = Math.ceil(totalTemplate / 10);
  const paginationNumbers = [];
  for (let i = 0; i < paginationNumber; i++) {
    paginationNumbers.push(i + 1);
  }

  const divide =
    Math.floor(paginationNumbers.length / 2) +
    (Math.floor(paginationNumbers.length % 2) > 0 ? 1 : 0);
  const showPagination = [];
  for (let i = 0; i <= divide; i++) {
    showPagination.push(paginationNumbers.splice(0, 2));
  }

  const moveNext = pageNumber => {
    if (pageNumber === showPagination.length - 2) {
      alert('마지막 페이지입니다');
    } else {
      setPageNumber(pageNumber + 1);
      searchParams.set('page', pageNumber + 3);
      searchParams.set('limit', limit);
      setPage(pageNumber + 3);
      setSearchParams(searchParams);
    }
  };

  const movePrev = pageNumber => {
    if (pageNumber === 0) {
      alert('처음 페이지입니다');
    } else {
      setPageNumber(pageNumber - 1);
      searchParams.set('page', pageNumber);
      searchParams.set('limit', limit);
      setPage(pageNumber);
      setSearchParams(searchParams);
    }
  };

  const movePage = page => {
    searchParams.set('page', page);
    searchParams.set('limit', limit);
    setPage(page);
    setSearchParams(searchParams);
  };

  return (
    <>
      <Outlet />
      <S.Layout>
        <S.Filter>
          <S.StateAndPeriod>
            <S.State> 상태 </S.State>
            <S.Period> 참여기간 </S.Period>
          </S.StateAndPeriod>
          <S.SearchTemplate>
            <S.SearchImg alt="search img" src="/images/search.png" />
            <S.SearchInput placeholder=" 템플릿 검색" />
            <S.SearchButton>찾기</S.SearchButton>
          </S.SearchTemplate>
        </S.Filter>
        <S.TemplateListBox>
          <TemplateList templates={template} />
        </S.TemplateListBox>
        <S.pagination>
          <S.PreButton onClick={() => movePrev(pageNumber)}>◀</S.PreButton>
          {showPagination[pageNumber].map(page => {
            return (
              <S.PageinationNum key={page} onClick={() => movePage(page)}>
                {page}
              </S.PageinationNum>
            );
          })}
          <S.NextButton onClick={() => moveNext(pageNumber)}>►</S.NextButton>
        </S.pagination>
      </S.Layout>
    </>
  );
};

export default Main;
