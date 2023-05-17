import { View } from 'react-native'
import CheckBox from './CheckBox'

export default props => {
  return (
    <View>
      {props.options?.map((option, i) => {
        const value = props.getValue(option)
        const selected = props.state.val === value
        return (
          <CheckBox
            key={value}
            borderRadius={50}
            state={{ val: selected, set: props.state.set.bind(null, value) }}
            label={props.getLabel(option, i)}
          />
        )
      })}
    </View>
  )
}
