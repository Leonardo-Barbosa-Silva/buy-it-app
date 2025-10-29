import { Button } from '@/components/ui/Button'
import { InputText } from '@/components/ui/TextInput'
import { StyleSheet, View } from 'react-native'

export function AddToCart() {
  return (
    <View style={styles.container}>
      <InputText placeholder="O que deseja comprar?" />

      <Button title="Adicionar ao carrinho" />
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
