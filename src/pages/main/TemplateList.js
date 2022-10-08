import React from 'react';
import Template from './Template';
import * as S from './MainStyle';

const TemplateList = ({ templates }) => {
  return (
    <S.TemplateList>
      {templates.map(template => {
        return <Template key={template.id} template={template} />;
      })}
    </S.TemplateList>
  );
};

export default TemplateList;
