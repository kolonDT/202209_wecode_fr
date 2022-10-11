import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../config';
import UserQuestion from '../UserQuestion';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';

const ImageShow = ({ sortIndex, userId, question }) => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API.IMAGE}/${userId}`,
      responseType: 'blob',
      //token 있을 수 있음
    }).then(res => {
      const url = window.URL.createObjectURL(
        new Blob([res.data], { type: res.headers['content-type'] })
      );
      setUrl(url);
    });
  }, [userId]);

  return (
    <div>
      <UserQuestion
        sortIndex={sortIndex}
        type={QUESTION_ARRAY_TYPE.imageUpload}
        question={question}
      >
        <Container>
          <ImageContainer src={url} />
        </Container>
      </UserQuestion>
    </div>
  );
};

export default ImageShow;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 29px;
`;

const ImageContainer = styled.img`
  max-width: 110%;
  height: auto;
`;
