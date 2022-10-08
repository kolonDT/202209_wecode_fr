import Mulitple from './Multiple';
import * as S from './StatisticsStyle';

const MulitpleList = ({ mulitples }) => {
  console.log(mulitples);
  return (
    <S.MulitpleLists>
      {mulitples?.map((mulitple, idx) => {
        return <Mulitple key={idx} mulitple={mulitple} />;
      })}
    </S.MulitpleLists>
  );
};

export default MulitpleList;
