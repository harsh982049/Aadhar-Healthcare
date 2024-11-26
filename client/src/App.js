import './App.css';
import Admin from './pages/Admin';
import LoginPage from './pages/LoginPage';
import User from './pages/User';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './pages/utils/ProtectedRoutes';
import Page404 from './pages/Page404';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/admin' element={<Admin />} />
          <Route path='/user' element={<User />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App;
