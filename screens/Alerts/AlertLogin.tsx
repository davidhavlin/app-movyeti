import { Store } from '@reduxjs/toolkit'
import { Alert } from 'react-native'
import { setWishRoute } from '../../app/GlobalSlice'

export const showLoginAlert = (store: Store) => {
  const goToLogin = () => {
    store.dispatch(setWishRoute('Login'))
    setTimeout(() => {
      store.dispatch(setWishRoute(null))
    }, 100)
  }
  return Alert.alert(
    'Tvoje prihlasenie vyprsalo',
    'Prihlas sa znova',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Login',
        onPress: () => goToLogin(),
        style: 'default',
      },
    ],
    {
      cancelable: true,
      onDismiss: () => {
        console.log('alert sa zavrel')
      },
      // Alert.alert('This alert was dismissed by tapping outside of the alert dialog.'),
    }
  )
}
