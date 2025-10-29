import { StyleSheet, View } from 'react-native'
import { AddToCart } from './components/AddToCart/index'
import { ProductList } from './components/ProductList'

export function Home() {
  return (
    <View style={styles.container}>
      <AddToCart />

      <ProductList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
})
