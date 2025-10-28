import { StyleSheet, View } from 'react-native'
import { SearchOrders } from './components/SearchOrders'
import { ProductList } from './components/ProductList'

export function Home() {
  return (
    <View style={styles.container}>
      <SearchOrders />

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
