import Multiple from './Multiple';
import * as S from './StatisticsStyle';

const MulitpleList = ({ multiples }) => {
  // console.log();
  return (
    <S.MultipleLists>
      {multiples?.map((multiple, idx) => {
        return <Multiple key={idx} multiple={multiple} />;
      })}
    </S.MultipleLists>
  );
};

export default MulitpleList;
