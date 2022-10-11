import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import * as S from './LoginStyle';

const Login = () => {
  const [info, setInfo] = useState({
    userId: '',
    userPassword: '',
  });

  const onChangeinfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const navigate = useNavigate();
  const passed = info.userId.length > 3 && info.userPassword.length > 3;

  const toLogin = e => {
    e.preventDefault();
    fetch(`${API.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: info.userId,
        password: info.userPassword,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.adminToken) {
          localStorage.setItem('token', result.adminToken);
          alert('로그인 성공');
          navigate('/');
        } else {
          alert('아이디 혹은 비밀번호를 확인해 주세요');
        }
      });
  };

  return (
    <S.Layout>
      <S.BackgroundColor>
        <S.LayoutCenter>
          <S.Logo>KoDa</S.Logo>
          <S.LoginBox>
            <S.LoginText>로그인</S.LoginText>
            <S.LoginForm>
              <S.LoginId
                type="text"
                placeholder=" 4자 이상 아이디를 입력해주세요"
                name="userId"
                value={info.userId}
                onChange={onChangeinfo}
              />
              <S.LoginPassword
                type="password"
                placeholder=" 비밀 번호를 입력해주세요"
                name="userPassword"
                value={info.userPassword}
                onChange={onChangeinfo}
              />
              <S.LoginButton disabled={!passed} onClick={toLogin}>
                완료
              </S.LoginButton>
            </S.LoginForm>
          </S.LoginBox>
        </S.LayoutCenter>
      </S.BackgroundColor>
    </S.Layout>
  );
};

export default Login;
