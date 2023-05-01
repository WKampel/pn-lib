import React, { useContext } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Context } from '../../contexts/style'
import { ScrollView } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'

export default props => {
  const style = useContext(Context)
  const icons = Object.keys(AntDesign.glyphMap)

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.icons}>
        {icons?.map(icon => (
          <Pressable
            key={icon.id}
            onPress={() => props.state.set(icon)}
            style={[styles.iconContainer, ...(props.state.val === icon ? [styles.selected, { borderColor: style.primaryColor }] : [])]}
          >
            <AntDesign name={icon} size={20} color='black' />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 175,
    backgroundColor: 'rgb(230, 230, 240)',
    borderColor: 'rgb(200, 200, 220)',
    borderWidth: 1,
    borderRadius: 10,
  },
  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    padding: 5,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: 'white',
  },
})
