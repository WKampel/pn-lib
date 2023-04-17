import { Pressable, StyleSheet, Text, View } from 'react-native'

export default props => {
  return (
    <View style={styles.radio}>
      {props.options?.map((option, i) => (
        <Pressable key={i} style={styles.buttonContainer} onPress={() => props.onChange && props.onChange(option)}>
          <View style={[styles.button, props.selected && props.getValue(props.selected) === props.getValue(option) ? styles.selected : {}]} />
          <Text>{props.getLabel(option, i)}</Text>
        </Pressable>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  radio: {},
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    borderWidth: 2,
    borderColor: '#f0f0f0',
    borderRadius: 40,
    width: 20,
    height: 20,
    marginRight: 10,
  },
  selected: {
    borderWidth: 0,
    backgroundColor: '#c8c8c8',
  },
})
