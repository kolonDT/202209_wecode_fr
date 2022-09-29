import { React, useState } from 'react';
import LinkModal from '../../components/EditorModal/LinkModal';
import { API } from '../../config';
import * as S from './EditorModalStyle';

const EditorModal = () => {
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [text, setText] = useState(' ');
  const [form, setForm] = useState({});
  // const [check, setCheck] = useState({});
  const [check, setCheck] = useState({
    duplicate: 0,
    anonymous: 0,
  });
  const adminToken = localStorage.getItem('token');

  // const changeHandler = e => {
  //   if (e.target.checked) {
  //     setCheck(true);
  //   } else {
  //     setCheck(false);
  //   }
  // };

  const changeHandler = e => {
    const { name, value } = e.target;
    if (e.target.checked) {
      setCheck({});
    } else {
      // setCheck(checked => 0);
    }
    setCheck({ ...check, [name]: value });
  };

  console.log(check);
  const landingPage = e => {
    setText(e.target.value);
  };
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
        anonymousAllow: 1,
        duplicationAllow: 1,
        landingUrl: '{text}',
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
                name="duplicate"
                value={check.duplicate}
                onClick={changeHandler}
              />
            </S.DuplicateAndAnonymous>
            {/* 익명 체크 여부 */}
            <S.DuplicateAndAnonymous>
              <S.ModalText>익명 여부 체크</S.ModalText>
              <S.Check
                type="checkbox"
                name="anonymous"
                value={check.anonymous}
                onClick={changeHandler}
              />
            </S.DuplicateAndAnonymous>
            {/* 랜딩 페이지 설정 */}
            <S.LandingPage>
              <S.LandingText>참여 완료 후 랜딩 설정</S.LandingText>
              <S.LandingInput
                value={text}
                onChange={landingPage}
                placeholder=" 랜딩 페이지를 입력하세요."
              />
            </S.LandingPage>
          </S.CheckBox>
          {/* 완료 버튼 */}
          <S.ButtonBox>
            <S.Button
              onClick={() => {
                setOpenLinkModal(true);
                getData();
              }}
            >
              완료
            </S.Button>
            {openLinkModal === true && <LinkModal form={form} />}
          </S.ButtonBox>
        </S.LayoutDetail>
      </S.Layout>
    </S.Background>
  );
};
// 에디터 페이지에서

// import EditorModal from '../../components/EditorModal/EditorModal';
// 상단에 const [openEditorModal, SetOpenEditorModal] = useState(false);
// 완료버튼에 onClick={() => SetOpenEditorModal(true)}
// 아무 곳에나 {openEditorModal === true && <EditorModal />}

export default EditorModal;
