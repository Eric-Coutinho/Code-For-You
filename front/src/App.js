import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

import './index.css';
import './App.css';

import NavBar from './Components/NavBar/navbar';

import LoginPage from './Pages/LoginPage/loginPage';
import NotFoundPage from './Pages/NotFoundPage/NotFound';

function App() {
  return (
    <div className="App-header">
      <NavBar />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}

export default App;
