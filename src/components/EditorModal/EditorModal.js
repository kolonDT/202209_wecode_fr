import { React, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import LinkModal from '../../components/EditorModal/LinkModal';
import { API } from '../../config';
import { openState } from '../../store/store';
import * as S from './EditorModalStyle';

const EditorModal = () => {
  const {
    register,
    formState: { isDirty, errors },
  } = useFormContext();
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const setOpenEditorModal = useSetRecoilState(openState);
  // console.log('edim', errors);
  // console.log('edidm', isDirty);
  // 링크 모달 State (에디터 모달 완료 후 링크 모달로 이동)
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

  // const changeHandler = e => {
  //   const { name } = e.target;
  //   if (e.target.checked) {
  //     setCheck({ ...check, [name]: 1 });
  //   } else {
  //     setCheck({ ...check, [name]: 0 });
  //   }
  // };

  const getData = () => {
    fetch(`${API.EDITOR}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: adminToken,
      },
      body: JSON.stringify({
        formData: 'datajson',
        surveyName: 'test122111',
        startDate: '2022-09-27',
        endDate: '2022-10-07',
        anonymousAllow: check.anonymous,
        duplicationAllow: check.duplicate,
        landingUrl: text,
      }),
    })
      .then(res => res.json())
      .then(result => setForm(result));
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
            <S.Button
              onClick={() => {
                // errors ? setOpenEditorModal(false) : setOpenLinkModal(true);
                // setOpenLinkModal(true);
              }}
              type="submit"
            >
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
