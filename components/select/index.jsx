import { Picker } from '@react-native-picker/picker'
import { useRef, useState } from 'react'
import { Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/button'

export default props => {
  const onChange = itemValue => props.state.set(props.options.find(option => getValue(option) == itemValue))

  const [iosModalVisible, setIosModalVisible] = useState(false)
  const androidPickerRef = useRef()
  const getLabel = option => (props.getLabel ? props.getLabel(option) : option && option.label)
  const getValue = option => (props.getValue ? props.getValue(option) : option && option.value)

  if (Platform.OS == 'ios') {
    return (
      <>
        <Pressable style={styles.picker} onPress={() => setIosModalVisible(true)}>
          <Text>{getLabel(props.state.val)}</Text>
        </Pressable>
        <Modal transparent={true} animationType={'fade'} visible={iosModalVisible} onRequestClose={() => {}}>
          <View style={iosStyles.modalContainer}>
            <View style={iosStyles.modal}>
              <Button text='Done' onPress={() => setIosModalVisible(false)} />
              <Picker style={iosStyles.picker} selectedValue={getValue(props.state.val)} onValueChange={onChange}>
                <Picker.Item label='Select' />
                {props.options?.map(option => (
                  <Picker.Item key={getValue(option)} label={getLabel(option)} value={getValue(option)} />
                ))}
              </Picker>
            </View>
          </View>
        </Modal>
      </>
    )
  } else if (Platform.OS == 'web') {
    return (
      <Picker style={styles.picker} selectedValue={getValue(props.state.val)} onValueChange={onChange}>
        <Picker.Item key='_SELECT ONE_' label='Select' value={null} disabled />
        {props.options?.map(option => (
          <Picker.Item key={getValue(option)} label={getLabel(option)} value={getValue(option)} />
        ))}
      </Picker>
    )
  } else if (Platform.OS == 'android') {
    return (
      <>
        <Pressable style={styles.picker} onPress={() => androidPickerRef.current.focus()}>
          <Text>{getLabel(props.state.val)}</Text>
        </Pressable>
        <Picker ref={androidPickerRef} style={{ display: 'none' }} selectedValue={getValue(props.state.val)} onValueChange={onChange}>
          <Picker.Item label='Select' />
          {props.options?.map(option => (
            <Picker.Item key={getValue(option)} label={getLabel(option)} value={getValue(option)} />
          ))}
        </Picker>
      </>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: 'rgb(230, 230, 240)',
    borderColor: 'rgb(200, 200, 220)',
    borderWidth: 1,
    borderRadius: 10,
    height: 38,
    paddingLeft: Platform.OS == 'web' ? 5 : 10,
    justifyContent: 'center',
    flex: 1,
    fontSize: 12,
  },
})

const iosStyles = StyleSheet.create({
  modal: {
    backgroundColor: '#f0f0f0',
    height: 300,
    borderRadius: 10,
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: { width: '100%' },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
})
