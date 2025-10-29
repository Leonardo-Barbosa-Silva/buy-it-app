import { CircleCheck, CircleDashed, LucideIcon } from 'lucide-react-native'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'

export type OrderStatus = 'pending' | 'bought'

interface Filter {
  title: string
  Icon: LucideIcon
}

export interface FilterButtonProps extends TouchableOpacityProps {
  type: OrderStatus
  isActive: boolean
}

const filters: Record<OrderStatus, Filter> = {
  pending: {
    title: 'Pendentes',
    Icon: CircleDashed,
  },
  bought: {
    title: 'Comprados',
    Icon: CircleCheck,
  },
}

export function FilterStatusButton({
  type,
  isActive,
  ...props
}: FilterButtonProps) {
  const { title, Icon } = filters[type]

  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View style={styles.filter}>
        <Icon
          size={16}
          color={isActive ? styles.activeIcon.color : styles.icon.color}
          strokeWidth={isActive ? 3 : 1}
        />

        <Text style={isActive ? styles.activeTitle : styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    color: '#979797',
  },
  activeIcon: {
    color: '#000',
  },
  title: {
    color: '#979797',
    fontWeight: 'normal',
    fontSize: 13,
  },
  activeTitle: {
    color: '#000',
    fontWeight: '500',
    fontSize: 13,
  },
})
