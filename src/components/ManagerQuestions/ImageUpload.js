import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { API } from '../../config';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import GlobalQuestion from '../GlobalQuestion';

const ImageUpload = ({ sortIndex, onRemove, formId }) => {
  const { register, watch } = useFormContext(); // retrieve all hook methods
  const [fileImage, setFileImage] = useState(''); // 미리보기용 State
  const [postImage, setPostImage] = useState('');
  const [data, setData] = useState('');

  const image = watch(`formData[${sortIndex - 1}].file`);

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setFileImage(URL.createObjectURL(file));
      setPostImage(file);
    }
  }, [image]);

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
  };

  const adminToken = localStorage.getItem('token');

  const createBoard = async () => {
    if (adminToken) {
      const formData = new FormData();
      formData.append('image', postImage);
      const config = {
        headers: {
          Authorization: adminToken,
          'Content-Type': 'multipart/form-data',
        },
      };
      await axios
        .post(`${API.MAIN}/editor/image`, formData, config, {
          // headers: {
          //   Authorization: adminToken,
          // 'Content-Type': 'multipart/form-data',
          // },
        })
        .then(res => setData(res.status))
        .catch(err => {
          throw err;
        });
    }
  };

  return (
    <GlobalQuestion
      sortIndex={sortIndex}
      type={QUESTION_ARRAY_TYPE.imageUpload}
      register={register}
      onRemove={onRemove}
      formId={formId}
    >
      <ImageBox>{fileImage && <Image src={fileImage} alt="img" />}</ImageBox>
      <ButtonBox>
        <UploadLabel htmlFor="input-file">업로드</UploadLabel>
        <UploadButton
          type="file"
          accept="image/*"
          id="input-file"
          {...register(`formData[${sortIndex - 1}].file`)}
        />
        <>
          <button
            type="button"
            onClick={createBoard}
            style={{
              position: 'relative',
              width: '80px',
              height: '30px',
              marginTop: '15px',
              marginLeft: '380px',
              fontSize: '11px',
              backgroundColor: '#2087C9',
              color: 'white',
              borderRadius: '10px',
              opacity: 0.86,
            }}
          >
            이미지 저장
          </button>
          <ErrorM>
            {data === 201 && fileImage ? (
              <CheckImage>이미지 저장 완료!</CheckImage>
            ) : (
              '이미지 저장을 눌러주세요'
            )}
          </ErrorM>
        </>
        <button
          type="button"
          onClick={deleteFileImage}
          style={{
            width: '40px',
            height: '30px',
            marginTop: '15px',
            fontSize: '11px',
            backgroundColor: '#2087C9',
            color: 'white',
            borderRadius: '10px',
            opacity: 0.86,
          }}
        >
          삭제
        </button>
      </ButtonBox>
    </GlobalQuestion>
  );
};

export default ImageUpload;
const CheckImage = styled.span`
  margin-left: 40px;
  color: green;
`;

const UploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  margin-top: 15px;
  font-size: 11px;
  background-color: rgb(32, 135, 201);
  color: white;
  border-radius: 10px;
  opacity: 0.86;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const ImageBox = styled.div`
  background-color: aliceblue;
  max-width: 600px;
  min-height: 50px;
  margin-top: 30px;
  margin: 30px 50px 10px 50px;
`;
const Image = styled.img`
  width: 600px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  margin: 10px 60px 10px 50px;
`;

const UploadButton = styled.input`
  margin-top: 10px;
  display: none;
`;
const ErrorM = styled.span`
  position: absolute;
  left: 530px;
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.theme.style.red};
`;
