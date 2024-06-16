import { Route, Routes } from 'react-router-dom';

import './index.css';
import './App.css';

import NavBar from './Components/NavBar/navbar';

import { Home } from './Pages/HomePage';
import { DesafioPage } from './Pages/Desafio';
import { ForumPage } from './Pages/Forum/forum';
import { ForumsPage } from './Pages/Forums/forumsPage';
import { LoginPage } from './Pages/LoginPage/loginPage';
import { NotFoundPage } from './Pages/NotFoundPage/NotFound';
import { RegisterPage } from './Pages/RegisterPage/registerPage';

function App() {
  return (
    <div className="App-header">
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/desafio' element={<DesafioPage />} />
          <Route path='/forums' element={<ForumsPage />} />
          <Route path='/forum' element={<ForumPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}

export default App;
