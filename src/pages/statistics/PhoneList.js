import React from 'react';
import * as S from './StatisticsStyle';

const PhoneList = ({ personal }) => {
  return (
    <S.PhoneList>
      <S.PhoneText> 참여자 정보 </S.PhoneText>
      <S.PhoneNums>
        {personal.map(person => {
          const { id, phone, name } = person;
          return (
            <S.PhoneNum key={id}>
              <S.PhoneId> {id}번</S.PhoneId>
              {name !== null ? (
                <S.PersonName> 이름 : {name} </S.PersonName>
              ) : (
                ' '
              )}
              {phone !== null ? (
                <S.PersonPhone> 전화번호 : {phone} </S.PersonPhone>
              ) : (
                ' '
              )}
            </S.PhoneNum>
          );
        })}
      </S.PhoneNums>
    </S.PhoneList>
  );
};

export default PhoneList;
