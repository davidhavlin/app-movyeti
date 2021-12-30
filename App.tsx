import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { Provider as ReduxProvider, useDispatch } from 'react-redux'

import { store } from './app/store'
import Ws from './services/socket'
import { useEffect } from 'react'
import { authUser } from './features/user/UserSlice'
Ws.boot()

const Main = () => {
  const colorScheme = useColorScheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authUser())
  }, [])

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  )
}

const App = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <ReduxProvider store={store}>
        <Main />
      </ReduxProvider>
    )
  }
}

export default App
