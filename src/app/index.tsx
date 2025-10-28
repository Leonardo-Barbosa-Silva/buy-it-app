import { Image, StyleSheet, View } from 'react-native'
import { Home } from './Home'

import logo from '@/assets/logos/buy-it-logo.png'

export function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    width: 140,
    height: 70,
    marginVertical: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
})
