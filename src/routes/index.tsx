import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

import SignIn from './Authentication/SignIn'
import App from '../App'

import Product from './AdminPages/Product/Product'
import Users from './AdminPages/Users/Users'
import Profile from './UsersPages/Profile/Profile'
import NotAllowed from './NotAllowed'
import NotFound from './NotFound'
import Homepage from './Homepage'
import Favorites from './UsersPages/Favorites/Favorites'

export default function Router() {
    const store = useAppSelector((state) => state.authenticator)
    const { isLoggedIn, isAdmin, isUser } = store

    function PrivateRoute({ children }: any) {
        return isLoggedIn ? children : <Navigate to="/login" />
    }

    function PrivateRouteAuth({ children }: any) {
        if (isLoggedIn) return <Navigate to="/" />
        return children
    }

    function ProtectedRoute({ children, isAllowed }: any) {
        return isAllowed ? children : <NotAllowed />
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* AUTHENTICATION */}
                <Route
                    path="/login"
                    element={
                        <PrivateRouteAuth>
                            <SignIn />
                        </PrivateRouteAuth>
                    }
                />
                {/* APP */}
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <App />
                        </PrivateRoute>
                    }>
                    <Route path='/' element={                 
                            <Homepage />             
                    } />
                    <Route path='/users' element={
                        <ProtectedRoute isAllowed={isAdmin}>
                            <Users />
                        </ProtectedRoute>
                    } />
                    <Route path='/product' element={
                        <ProtectedRoute isAllowed={isAdmin}>
                            <Product />
                        </ProtectedRoute>
                    } />
                    <Route path='/profile' element={
                        <ProtectedRoute isAllowed={isAdmin || isUser}>
                            <Profile />
                        </ProtectedRoute>
                    } />
                    <Route path='/favorites' element={
                        <ProtectedRoute isAllowed={isUser}>
                            <Favorites />
                        </ProtectedRoute>
                    } />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
