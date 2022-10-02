import React from 'react';
import * as S from './StatisticsStyle';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from 'recharts';

const Multiple = ({ mulitple }) => {
  const { id, question, data } = mulitple;
  return (
    <S.MultipleLayout>
      <S.Num>
        <S.Id>{id}</S.Id>
        {question}
      </S.Num>
      <S.Answer>
        <S.Chart>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Pie
              dataKey="value"
              data={data}
              cx={500}
              cy={200}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
            />
            <Tooltip />
          </PieChart>
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 60,
              left: 5,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </S.Chart>
      </S.Answer>
    </S.MultipleLayout>
  );
};

export default Multiple;
