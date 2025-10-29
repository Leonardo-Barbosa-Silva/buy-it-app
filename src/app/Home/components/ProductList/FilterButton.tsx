import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

export type OrderListFilterType = 'pending' | 'bought'

export interface FilterButtonProps extends TouchableOpacityProps {
  type: OrderListFilterType
  isActive: boolean
}

export function FilterButton({ type, isActive, ...props }: FilterButtonProps) {
  const renderTitle = () => {
    switch (type) {
      case 'pending':
        return 'Pendentes'
      case 'bought':
        return 'Comprados'
      default:
        return ''
    }
  }

  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={isActive ? styles.active : {}}>{renderTitle()}</Text>
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
  active: {
    color: 'red',
  },
})
