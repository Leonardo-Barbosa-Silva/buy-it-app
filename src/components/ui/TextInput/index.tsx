import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export function InputText({ ...props }: TextInputProps) {
  return <TextInput {...props} style={styles.input} />
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 48,
    width: '100%',
    paddingHorizontal: 16,
  },
})
