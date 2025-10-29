import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

export function FilterCleanerButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.title}>Limpar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    color: '#979797',
    fontSize: 12,
    fontWeight: '500',
  },
})
