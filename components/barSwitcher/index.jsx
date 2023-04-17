import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

export default props => {
  return (
    <View style={styles.barSwitcher}>
      {props.items.map((item, i) => (
        <Pressable key={i} onPress={() => props.onPress(item)} style={[styles.item, item.active ? styles.itemActive : {}]}>
          <Text style={styles.name}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  barSwitcher: {
    flexDirection: 'row',
    backgroundColor: 'rgb(235, 235, 235)',
    borderRadius: 5,
    padding: 2,
    marginBottom: 20,
  },
  item: { flex: 1, padding: 5, borderRadius: 5 },
  itemActive: {
    backgroundColor: 'white',
  },
  name: { fontSize: 12, textAlign: 'center' },
})
