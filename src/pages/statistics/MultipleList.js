import Mulitple from './Multiple';
import * as S from './StatisticsStyle';

const MulitpleList = ({ mulitples }) => {
  return (
    <S.MulitpleLists>
      {mulitples?.map(mulitple => {
        return <Mulitple key={mulitple.id} mulitple={mulitple} />;
      })}
    </S.MulitpleLists>
  );
};

export default MulitpleList;
