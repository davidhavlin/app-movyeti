import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { GlobalState } from '../types/global-types'
import { RootState } from './store'

const initialState: GlobalState = {
  wishRoute: null,
}

export const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setWishRoute: (state, action) => {
      console.log('setting route', { action })
      state.wishRoute = action.payload
    },
  },
})

export const { setWishRoute } = slice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const authUser = () => async (dispatch: Dispatch) => {
//   try {
//     const user = await api.get('user').authUser()

//     dispatch(setUser(user))
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const registerUser =
//   (formData: RegisterData, cb: () => void) => async (dispatch: Dispatch) => {
//     // dispatch(incrementByAmount(amount))
//     try {
//       const user = await api.get('user').registerUser(formData)
//       console.log({ user })

//       cb()
//     } catch (error) {
//       console.log(error)
//     }
//   }

// export const loginUser = (formData: LoginData, cb: () => void) => async (dispatch: Dispatch) => {
//   try {
//     const { token, user } = await api.get('user').loginUser(formData)
//     console.log({ user, token })
//     dispatch(setUser(user))
//     await SecureStore.setItemAsync('auth_token', token)

//     cb()
//   } catch (error) {
//     console.log(error)
//   }
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getWishRoute = (state: RootState) => state.global.wishRoute

export default slice.reducer
