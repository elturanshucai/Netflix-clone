import './app.scss'
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';
import NoPage from './pages/noPage/NoPage';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from "react-router-dom"

function App() {
  const user = true
  return <>
    <Router>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
        {
          user && (
            <>
              <Route path='/movies' element={<Home type="movies" />} />
              <Route path='/series' element={<Home type="series" />} />
              <Route path='/watch' element={<Watch />} />
            </>
          )
        }
        <Route path='*' element={<NoPage/>} />
      </Routes>
    </Router>
  </>
}

export default App;
