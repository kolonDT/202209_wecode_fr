import React from 'react';
import * as S from './StatisticsStyle';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Sector,
  ResponsiveContainer,
  Cell,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from 'recharts';

const Multiple = ({ multiple }) => {
  const { id, question, data } = multiple;
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <S.MultipleLayout>
      <S.Num>
        <S.Id>{id}</S.Id>
        {question}
      </S.Num>
      <S.Answer>
        <S.Chart>
          <PieChart width={400} height={400}>
            {/* 라이브러리 자체 범례  */}
            {/* <Legend layout="vertical" verticalAlign="bottom" align="left" /> */}
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            />
            <Pie />
            <Tooltip />
          </PieChart>
          {/* barChart 차트 변경시 쓰일 거 같아 주석 처리 */}
          {/* <BarChart
            width={400}
            height={400}
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
          </BarChart> */}
          <S.Sorts>
            {data.map(idx => {
              return (
                <S.Sort key={idx}>
                  <S.SortName>█{idx.name}</S.SortName>
                  <S.SortValue>{idx.value}명</S.SortValue>
                </S.Sort>
              );
            })}
          </S.Sorts>
        </S.Chart>
      </S.Answer>
    </S.MultipleLayout>
  );
};

export default Multiple;
