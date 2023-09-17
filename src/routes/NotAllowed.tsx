import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function NotAllowed() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [])

    return (
        <div>Bu sayfaya giriş izniniz bulunmamaktadır. 3 saniye içerisinde anasayfaya yönlendirileceksiniz</div>
    )
}

export default NotAllowed