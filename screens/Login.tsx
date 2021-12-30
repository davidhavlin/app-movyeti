import { useEffect, useState } from 'react'
import { Button, StyleSheet, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'

import { Text, View } from '../components/Themed'
import { loginUser } from '../features/user/UserSlice'
import { RootTabScreenProps } from '../types'
import * as SecureStore from 'expo-secure-store'

export const Login = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)

  const dispatch = useDispatch()

  const onSubmit = () => {
    if (!email || !password) return
    dispatch(loginUser({ email, password }, afterLogin))
  }

  useEffect(() => {
    setDisabled(!email || !password)
  }, [email, password])

  const afterLogin = async () => {
    console.log('after login')
    // await SecureStore.setItemAsync('auth_token', 'value')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login formular</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
        value={email}
        placeholder="Email address"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
        value={password}
        autoCompleteType="password"
        textContentType="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="login" onPress={onSubmit} disabled={disabled} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 4,
    borderColor: '#eee',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
})
