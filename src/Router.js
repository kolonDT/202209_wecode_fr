import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Editor from './pages/editor/Editor';
import Main from './pages/main/Main';
import Login from './pages/Login/Login';
import Link from './pages/link/Link';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/link/:id" element={<Link />} />
        <Route path="/main" element={<Main />} />
        <Route path="/editor/:id" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
