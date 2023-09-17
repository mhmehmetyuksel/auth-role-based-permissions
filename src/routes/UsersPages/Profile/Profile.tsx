import { useAppSelector } from "../../../redux/hooks"

function Profile() {
    const store = useAppSelector((state) => state.authenticator)
    const { user } = store
  return (
    <div>
        Bu ekranda kullanıcı bilgileri bulunmaktadır.
        Kullanıcı Adınız: {user.username} Şifreniz: {user.password} Rolünüz: {user.role}
    </div>
  )
}

export default Profile