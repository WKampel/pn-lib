import { AntDesign } from '@expo/vector-icons'
import { Pressable, View } from 'react-native'
import { styled } from '../libs/wakui'
import Label from './Label'

const CheckBox = styled('checkBox', ({ style = {}, onChange, value, label }) => {
  return (
    <Pressable style={style} onPress={onChange?.bind(null, value ? false : true)}>
      <View style={style.buttonStyle}>
        {value ? <AntDesign name='check' size={style.buttonStyle.fontSize} color={style.buttonStyle.color} /> : null}
      </View>
      <Label>{label}</Label>
    </Pressable>
  )
})

export default CheckBox
