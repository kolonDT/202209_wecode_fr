import { React, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { errorSelector, useRecoilValue, useSetRecoilState } from 'recoil';
import LinkModal from '../../components/EditorModal/LinkModal';
import { API } from '../../config';
import { openState } from '../../store/store';
import * as S from './EditorModalStyle';

const EditorModal = ({ errors, register }) => {
  const { getValues } = useFormContext(register);

  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [form, setForm] = useState({});

  const setOpenEditorModal = useSetRecoilState(openState);
  const errorNum = Object.keys(errors).length;

  const checkValidation = errors => {
    const { startDate, endDate, surveyName } = getValues();
    if (startDate || endDate || surveyName) {
      Object.keys(errors).length === 0 && setOpenLinkModal(true);
    } else {
      console.log('error');
    }
  };

  return (
    <S.Background>
      <S.Layout>
        <S.LayoutDetail>
          <S.Titlebox>
            <S.Title>관리자 설정 항목</S.Title>
          </S.Titlebox>
          <S.CheckBox>
            <S.DuplicateAndAnonymous>
              <S.ModalText>중복 여부 체크</S.ModalText>
              <S.Check
                type="checkbox"
                name="anonymousAllow"
                {...register(`anonymousAllow`)}
              />
            </S.DuplicateAndAnonymous>
            <S.DuplicateAndAnonymous>
              <S.ModalText>익명 여부 체크</S.ModalText>
              <S.Check
                type="checkbox"
                name="duplicationAllow"
                {...register(`duplicationAllow`)}
              />
            </S.DuplicateAndAnonymous>
            <S.LandingPage>
              <S.LandingText>참여 완료 후 랜딩 설정</S.LandingText>
              <S.LandingInput
                name="landingUrl"
                placeholder=" 랜딩 페이지를 입력하세요."
                {...register(`landingUrl`)}
              />
            </S.LandingPage>
          </S.CheckBox>
          <S.ButtonBox>
            <S.Button type="submit" onClick={() => checkValidation(errorNum)}>
              완료
            </S.Button>
            <S.Button
              onClick={() => {
                setOpenEditorModal(false);
              }}
            >
              취소
            </S.Button>
            {openLinkModal === true && <LinkModal form={form} />}
          </S.ButtonBox>
        </S.LayoutDetail>
      </S.Layout>
    </S.Background>
  );
};

export default EditorModal;
