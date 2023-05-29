import { Text } from 'react-native'
import DayInput from './DayInput'
import Field from './Field'
import Radio from './Radio'
import Select from './Select'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import YesNoInput from './YesNoInput'

const FormField = ({ type, label, options, state, style }) => {
  let element = null
  if (type == 'title') {
    element = (
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
    label = null
  }
  if (type == 'textinput') element = <TextInput placeholder={label} state={state} />
  if (type == 'textarea') element = <TextInput autoHeight={true} multiline={true} placeholder={label} state={state} />
  if (type == 'yesNo') element = <YesNoInput state={state} />
  if (type == 'radio') element = <Radio getLabel={i => i?.value} getValue={i => i?.value} options={options} state={state} />
  if (type == 'dropdown') element = <Select getLabel={i => i?.value} getValue={i => i?.value} options={options} state={state} />
  if (type == 'date') element = <DayInput state={state} />
  if (type == 'time') element = <TimeInput state={state} />
  if (type == 'longtext') {
    element = <Text>{label}</Text>
    label = null
  }

  return (
    <Field style={style} label={label}>
      {element}
    </Field>
  )
}

export default FormField
