import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Editor from './pages/editor/Editor';
import Main from './pages/main/Main';
import Login from './pages/Login/Login';
import Link from './pages/link/Link';
import UserSurvey from './pages/user/UserContainer';
import Statistics from './pages/statistics/StatisticsPage';
import NoneTemplete from './pages/main/NoneTemplete';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Nav />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />

        <Route path="/link/:id" element={<Link />}>
          <Route path="" element={<Nav />} />
        </Route>

        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/surveypage/:id" element={<UserSurvey />} />
        <Route path="/statistic/:id" element={<Statistics />} />
        <Route path="/none" element={<NoneTemplete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
