import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { QUESTION_ARRAY_TYPE } from '../../pages/editor/SurveyEditor';
import GlobalQuestion from '../GlobalQuestion';

const ImageUpload = ({ sortIndex, label }) => {
  const { register } = useFormContext(); // retrieve all hook methods
  const [fileImage, setFileImage] = useState(''); // 미리보기용 State
  const [postImage, setPostImage] = useState('');
  const saveFileImage = e => {
    setPostImage(e.target.files[0]);
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  // const deleteFileImage = () => {
  //   URL.revokeObjectURL(fileImage);
  //   setFileImage('');
  // };

  console.log(postImage);

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
        .post('http://10.133.58.211:8000/editor/image', formData, config)
        .then(res => console.log(res))
        .catch(err => {
          throw err;
        });
    }
  };

  return (
    <GlobalQuestion
      sortIndex={sortIndex}
      type={QUESTION_ARRAY_TYPE.ImageUpload}
      register={register}
    >
      <ImageBox>{fileImage && <Image src={fileImage} alt="img" />}</ImageBox>
      <ButtonBox>
        <UploadButton type="file" accept="image/*" onChange={saveFileImage} />
        <DeleteButton onClick={createBoard}>삭제</DeleteButton>
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
  flex-direction: column;
  height: 70px;
  margin-left: 50px;
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
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #c27c8f;
    opacity: 0.4px;
  }
`;
