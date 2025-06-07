import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import ChatPage from './pages/ChatPage/ChatPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from './firebase'
import { useDispatch } from 'react-redux'
import { clearUser, setUser } from './store/userSlice'


function App() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');

        dispatch(setUser({
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName
        }))
      } else {
        navigate('/login');
        dispatch(clearUser());
      }
    })
    return () => unsubscribe();
  }, [])

  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
