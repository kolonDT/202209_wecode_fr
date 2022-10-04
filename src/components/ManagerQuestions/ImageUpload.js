import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { API } from '../../config';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import GlobalQuestion from '../GlobalQuestion';

const ImageUpload = ({ sortIndex, label }) => {
  const { register, watch } = useFormContext(); // retrieve all hook methods
  const [fileImage, setFileImage] = useState(''); // 미리보기용 State
  const [postImage, setPostImage] = useState('');

  const image = watch(`formData[${sortIndex - 1}].file`);

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setFileImage(URL.createObjectURL(file));
      setPostImage(file);
    }
  }, [image]);
  // const saveFileImage = e => {
  //   setFileImage(URL.createObjectURL(e.target.files[0]));
  // };

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
          // Authorization: adminToken,
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
        .then(res => console.log(res))
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
    >
      <ImageBox>{fileImage && <Image src={fileImage} alt="img" />}</ImageBox>
      <ButtonBox>
        <UploadButton
          type="file"
          accept="image/*"
          {...register(`formData[${sortIndex - 1}].file`)}
        />
        <button type="button" onClick={createBoard}>
          저장하기
        </button>
        <DeleteButton onClick={deleteFileImage}>삭제</DeleteButton>
      </ButtonBox>
    </GlobalQuestion>
  );
};

export default ImageUpload;

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
`;

const DeleteButton = styled.button`
  width: 40px;
  height: 20px;
  font-size: 13px;
  padding: 1px 6px;
  margin: 10px 4px 4px 0;
  border: 1px solid black;
  border-radius: 3px;
  background-color: #efefef;
  cursor: pointer;
  &:hover {
    background-color: #c27c8f;
    opacity: 0.4px;
  }
`;
