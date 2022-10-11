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
