import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
    username: string
    password: string
    role: 'User' | 'Admin'
}

interface AuthState {
  isLoggedIn: boolean
  loading: boolean
  user: User
  isAdmin: boolean
  isUser: boolean
}

const initialState: AuthState = {
  isLoggedIn: false,
  loading: false,
  user: {} as User,
  isAdmin: false,
  isUser: false
}

export const authSlice = createSlice({
  name: 'contentManager',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setUser: (state,  action: PayloadAction<any>) => {
        state.user = action.payload
        state.isAdmin = action.payload.role === 'Admin'
        state.isUser = action.payload.role === 'User'
    }
  },
})

export const { setLoggedIn, setLoading, setUser } = authSlice.actions

export default authSlice.reducer
