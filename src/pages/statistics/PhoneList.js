import React from 'react';
import Phone from './Phone';

const PhoneList = ({ phone }) => {
  return (
    <>
      {phone.map((phoneNum, idx) => {
        return <div key={idx}>{phoneNum.phone}</div>;
      })}
    </>
  );
};

export default PhoneList;
