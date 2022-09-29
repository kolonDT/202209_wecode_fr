import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Editor from './pages/editor/Editor';
import Main from './pages/main/Main';
import Login from './pages/Login/Login';

import Link from './pages/link/Link';
import Modal from './components/nav/Modal';
import EditorModal from './components/EditorModal/EditorModal';
import MainModal from './components/MainModal/MainModal';

import LinkModal from './components/EditorModal/LinkModal';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/editor:id" element={<Editor />} />
        <Route path="/link/:id" element={<Link />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
