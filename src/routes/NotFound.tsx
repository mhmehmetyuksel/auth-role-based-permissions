import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function NotFound() {

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [])

    return (
        <div>Aradığınız sayfa bulunamadı. 3 saniye içerisinde anasayfaya yönlendirileceksiniz</div>
    )
}

export default NotFound