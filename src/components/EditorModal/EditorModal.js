import { React, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { errorSelector, useRecoilValue, useSetRecoilState } from 'recoil';
import LinkModal from '../../components/EditorModal/LinkModal';
import { API } from '../../config';
import { openState } from '../../store/store';
import * as S from './EditorModalStyle';

const EditorModal = ({ errors, register }) => {
  // console.log('edim', errors);
  // console.log('edidm', isDirty);
  // 링크 모달 State (에디터 모달 완료 후 링크 모달로 이동)
  const { getValues } = useFormContext(register);
  // console.log({ getValues:  });
  const [openLinkModal, setOpenLinkModal] = useState(false);
  // 랜딩페이지 URL State
  const [text, setText] = useState(' ');
  // formData State
  const [form, setForm] = useState({});
  // checkBox State
  const [check, setCheck] = useState({
    duplicate: false,
    anonymous: false,
  });
  const adminToken = localStorage.getItem('token');

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
            {/* 중복 체크 여부 */}
            <S.DuplicateAndAnonymous>
              <S.ModalText>중복 여부 체크</S.ModalText>
              <S.Check
                type="checkbox"
                name="anonymousAllow"
                {...register(`anonymousAllow`)}
              />
            </S.DuplicateAndAnonymous>
            {/* 익명 체크 여부 */}
            <S.DuplicateAndAnonymous>
              <S.ModalText>익명 여부 체크</S.ModalText>
              <S.Check
                type="checkbox"
                name="duplicationAllow"
                {...register(`duplicationAllow`)}
                // value={check.anonymous}
              />
            </S.DuplicateAndAnonymous>
            {/* 랜딩 페이지 설정 */}
            <S.LandingPage>
              <S.LandingText>참여 완료 후 랜딩 설정</S.LandingText>
              <S.LandingInput
                name="landingUrl"
                placeholder=" 랜딩 페이지를 입력하세요."
                {...register(`landingUrl`)}
              />
            </S.LandingPage>
          </S.CheckBox>
          {/* 완료 버튼 */}
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
