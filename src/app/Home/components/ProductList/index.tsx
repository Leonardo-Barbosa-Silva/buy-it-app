import { StyleSheet, View } from 'react-native'
import { FilterButton, OrderListFilterType } from './FilterButton'
import { CleanFiltersButton } from './CleanFiltersButton'
import { useState } from 'react'

export interface OrderListFilter {
  pending: boolean
  bought: boolean
}

const initialFilters: OrderListFilter = {
  pending: false,
  bought: false,
}

export function ProductList() {
  const [filters, setFilters] = useState<OrderListFilter>(initialFilters)

  const handleFilterPress = (type: OrderListFilterType) => {
    setFilters((prev) => ({
      ...initialFilters,
      [type]: !prev[type],
    }))
  }

  const handleCleanFilters = () => {
    setFilters(initialFilters)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.filter}>
          <FilterButton
            type="pending"
            onPress={() => handleFilterPress('pending')}
            isActive={filters.pending}
          />

          <FilterButton
            type="bought"
            onPress={() => handleFilterPress('bought')}
            isActive={filters.bought}
          />
        </View>

        <CleanFiltersButton onPress={handleCleanFilters} />
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
    gap: 10,
  },
})
