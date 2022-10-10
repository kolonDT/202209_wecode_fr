import React from 'react';
import * as S from './StatisticsStyle';

const PhoneList = ({ phone }) => {
  return (
    <S.PhoneList>
      <S.PhoneText> 참여자 정보 </S.PhoneText>
      <S.PhoneNums>
        {phone.map((phoneNum, idx) => {
          return <S.PhoneNum key={idx}>{phoneNum.phone}</S.PhoneNum>;
        })}
      </S.PhoneNums>
    </S.PhoneList>
  );
};

export default PhoneList;

// ?&filter=%EC%A7%84%ED%96%89%EC%A4%91&search=&pageNo=1&limit=10
// ?&filter=%EC%A7%84%ED%96%89%EC%A4%91&search=test&pageNo=1&limit=10
// ?&filter=%EC%A7%84%ED%96%89%EC%A4%91&search=test&pageNo=1&limit=10
