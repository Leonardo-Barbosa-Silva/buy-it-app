import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

export function FilterCleanerButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text>Limpar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
})
