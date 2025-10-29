import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

export function CleanFiltersButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text>Limpar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
})
