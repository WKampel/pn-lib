import React, { useContext, useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor'

export default props => {
  const richText = useRef()

  return (
    <View style={styles.container}>
      <RichEditor
        ref={r => {
          richText.current = r
        }}
        onChange={props.state.set}
        androidHardwareAccelerationDisabled={true}
        initialHeight={250}
        editorStyle={styles.richEditor}
        initialContentHTML={props.state.val}
      />

      <RichToolbar
        editor={richText}
        style={styles.richToolbar}
        actions={[
          actions.insertImage,
          actions.setBold,
          actions.setItalic,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertLink,
          actions.keyboard,
          actions.setStrikethrough,
          actions.setUnderline,
          actions.removeFormat,
          actions.insertVideo,
          actions.checkboxList,
          actions.undo,
          actions.redo,
        ]}
        iconMap={{ [actions.heading1]: ({ tintColor }) => <Text style={[{ color: tintColor }]}>H1</Text> }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 220)',
    overflow: 'hidden',
    flex: 1,
  },
  richEditor: {
    backgroundColor: 'rgb(230, 230, 240)',
  },
  richToolbar: {
    backgroundColor: 'rgb(230, 230, 240)',
  },
})
