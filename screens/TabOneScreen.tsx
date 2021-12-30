import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Touchable } from 'react-native'
import { useSelector } from 'react-redux'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { selectUser } from '../features/user/UserSlice'
import { RootTabScreenProps } from '../types'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  // const navigation = useNavigation()
  const nieco = () => {
    console.log('click')
  }
  const user = useSelector(selectUser)

  return (
    <View style={styles.container}>
      {user ? (
        <Text style={styles.title}>Vitaj {user.username}</Text>
      ) : (
        <Text style={styles.title}>Na pouzivanie aplikacie sa musis prihlasit</Text>
      )}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Register" color="red" onPress={() => navigation.navigate('Register')} />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
})
