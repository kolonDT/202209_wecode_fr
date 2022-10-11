import { React, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import LinkModal from '../../components/EditorModal/LinkModal';
import { openState } from '../../store/store';
import { ErrorMessage } from '@hookform/error-message';
import * as S from './EditorModalStyle';

const EditorModal = () => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [form, setForm] = useState({});

  const setOpenEditorModal = useSetRecoilState(openState);
  const errorNum = Object.keys(errors).length;

  const onClickHandler = errorNum => {
    errorNum === 0 && setOpenLinkModal(true);
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
                placeholder="ex)http://www.kolonglobal.com"
                pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)"
                {...register(`landingUrl`, {
                  required: {
                    value: '복수',
                    message: `https:// 형식을 맞춰주세요`,
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="landingUrl"
                render={({ message }) => <S.ErrorMOne>{message}</S.ErrorMOne>}
              />
            </S.LandingPage>
          </S.CheckBox>
          <S.ButtonBox>
            <S.Button
              type="submit"
              onClick={async () => {
                const result = await trigger(['landingUrl']);
                if (result) {
                  onClickHandler(errorNum);
                }
              }}
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
