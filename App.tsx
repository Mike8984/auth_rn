import { StyleSheet, SafeAreaView } from 'react-native'

import Navigation from './src/navigation'


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  }
})
