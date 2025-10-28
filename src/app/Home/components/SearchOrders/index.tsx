import { Button } from '@/components/ui/Button'
import { InputText } from '@/components/ui/TextInput'
import { StyleSheet, View } from 'react-native'

export function SearchOrders() {
  return (
    <View style={styles.container}>
      <InputText placeholder="What do you want to buy?" />

      <Button title="Add to cart" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
})
