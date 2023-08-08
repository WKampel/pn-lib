import { Text } from 'react-native'
import DayInput from './DayInput'
import Radio from './Radio'
import Select from './Select'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import YesNoInput from './YesNoInput'

const FormField = ({ type, label, options, state, style }) => {
  if (type == 'title') {
    return (
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          flex: 1,
        }}
      >
        {label}
      </Text>
    )
  }
  if (type == 'textinput') return <TextInput label={label} state={state} />
  if (type == 'textarea') {
    return <TextInput multiline={true} label={label} state={state} />
  }
  if (type == 'yesNo') return <YesNoInput label={label} state={state} />
  if (type == 'radio') return <Radio label={label} getLabel={i => i} getValue={i => i} options={options} state={state} />
  if (type == 'dropdown') return <Select label={label} getLabel={i => i} getValue={i => i} options={['banana', 'orange', 'apple']} state={state} />
  if (type == 'date') return <DayInput label={label} state={state} />
  if (type == 'time') return <TimeInput label={label} state={state} />
  if (type == 'longtext') {
    return <Text>{label}</Text>
  }
}

export default FormField
