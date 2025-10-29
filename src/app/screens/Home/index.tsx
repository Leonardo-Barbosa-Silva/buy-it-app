import { StyleSheet, View } from 'react-native'
import { AddToCart } from './sections/AddToCart/index'
import { OrderList } from './sections/ProductList'

export function Home() {
  return (
    <View style={styles.container}>
      <AddToCart />

      <OrderList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
})
