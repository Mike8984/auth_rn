import { View, StyleSheet } from 'react-native'
import SignInScreen from './src/screens/signInScreen'


const App = () => {
  return (
    <View>
      <SignInScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  }
})
