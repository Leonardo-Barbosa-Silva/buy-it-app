import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

interface DividerProps {
  dir: 'horizontal' | 'vertical'
  style?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
}

export function Divider({
  dir = 'horizontal',
  style,
  containerStyle,
}: DividerProps) {
  const baseStyle: ViewStyle = {
    backgroundColor: '#ccc',
  }

  return (
    <View style={containerStyle}>
      <View
        style={[
          baseStyle,
          style,
          dir === 'horizontal' ? styles.horizontal : styles.vertical,
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
    height: 1,
  },
  vertical: {
    height: '100%',
    width: 1,
  },
})
