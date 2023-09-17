import { useAppSelector } from '../redux/hooks'

function Homepage() {
    const user = useAppSelector((state) => state.authenticator.user)
  return (
    <div><h1>Hoşgeldin {user.username}, kullanıcı rolünüz: {user.role}</h1></div>
  )
}

export default Homepage