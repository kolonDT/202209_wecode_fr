import React from 'react';
import { Link } from 'react-router-dom';
import Template from './Template';
import * as S from './MainStyle';

const TemplateList = ({ templates }) => {
  return (
    <S.TemplateList>
      {templates.map(template => {
        const { id, surveyLink, name } = template;
        return (
          <Link
            key={id}
            to={`/link/${id}`}
            state={{ surveyLink: surveyLink, name: name }}
          >
            <Template key={id} template={template} />
          </Link>
        );
      })}
    </S.TemplateList>
  );
};

export default TemplateList;
