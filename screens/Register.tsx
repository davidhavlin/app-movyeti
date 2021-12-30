import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Button, StyleSheet, TextInput, Touchable } from 'react-native'
import { useDispatch } from 'react-redux'

import { Text, View } from '../components/Themed'
import { registerUser } from '../features/user/UserSlice'
import { RootTabScreenProps } from '../types'

export const Register = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  // const navigation = useNavigation()
  const [disabled, setDisabled] = useState(true)
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
  })

  const updateInput = (value: string, field: 'email' | 'username' | 'password') => {
    setForm((form) => ({
      ...form,
      [field]: value,
    }))
  }

  const afterRegister = () => {
    navigation.navigate('Login')
  }

  const onSubmit = () => {
    if (!form.email || !form.password || !form.username) return
    dispatch(registerUser(form, afterRegister))
  }

  useEffect(() => {
    setDisabled(!form.email || !form.username || !form.password)
  }, [form])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register formular</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.input}
        onChangeText={(value) => updateInput(value, 'email')}
        value={form.email}
        placeholder="Email address"
        autoCompleteType="email"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => updateInput(value, 'username')}
        value={form.username}
        placeholder="Username"
        autoCompleteType="username"
        textContentType="nickname"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => updateInput(value, 'password')}
        value={form.password}
        autoCompleteType="password"
        textContentType="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button disabled={disabled} title="Register" onPress={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 4,
    borderColor: '#eee',
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
