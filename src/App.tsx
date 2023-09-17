import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Button } from 'antd'
import { useAppDispatch } from './redux/hooks'
import { setLoggedIn, setUser } from './redux/authenticator'

function App() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const logout = () => {
    dispatch(setLoggedIn(false))
    dispatch(setUser({}))
    navigate('/login')
  }

  return (
    <>
      <Navbar />
      <div className="card">
      </div>
        <Outlet />
      <Button onClick={() => logout()}>Çıkış Yap</Button>
    </>
  )
}

export default App
