import { StyleSheet, View } from 'react-native'
import { FilterStatusButton, OrderStatus } from './components/FilterButton'
import { FilterCleanerButton } from './components/CleanFiltersButton'
import { useState } from 'react'

export interface OrderListActiveFilter {
  pending: boolean
  bought: boolean
}

const initialActiveFilters: OrderListActiveFilter = {
  pending: false,
  bought: false,
}

export function OrderList() {
  const [filters, setFilters] =
    useState<OrderListActiveFilter>(initialActiveFilters)

  const handleFilterPress = (type: OrderStatus) => {
    setFilters((prev) => {
      if (prev[type]) {
        return prev
      }

      return {
        ...initialActiveFilters,
        [type]: !prev[type],
      }
    })
  }

  const handleCleanFilters = () => {
    setFilters(initialActiveFilters)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.filter}>
          <FilterStatusButton
            type="pending"
            onPress={() => handleFilterPress('pending')}
            isActive={filters.pending}
          />

          <FilterStatusButton
            type="bought"
            onPress={() => handleFilterPress('bought')}
            isActive={filters.bought}
          />
        </View>

        <FilterCleanerButton onPress={handleCleanFilters} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 70,
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
})
