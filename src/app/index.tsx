import { Image, StyleSheet, View } from 'react-native';
import { Shop } from './Shop';

export function App() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logos/buy-it-logo.png')} style={styles.logo} />

      <Shop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
  },
  logo: {
    width: 140,
    height: 280,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
