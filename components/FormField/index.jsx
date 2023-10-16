import FormFieldDate from './fieldTypes/FormFieldDate'
import FormFieldLongText from './fieldTypes/FormFieldLongText'
import FormFieldRadio from './fieldTypes/FormFieldRadio'
import FormFieldSelect from './fieldTypes/FormFieldSelect'
import FormFieldTextArea from './fieldTypes/FormFieldTextArea'
import FormFieldTextInput from './fieldTypes/FormFieldTextInput'
import FormFieldTime from './fieldTypes/FormFieldTime'
import FormFieldTitle from './fieldTypes/FormFieldTitle'
import FormFieldYesNo from './fieldTypes/FormFieldYesNo'

const fieldComponents = {
  title: FormFieldTitle,
  textinput: FormFieldTextInput,
  textarea: FormFieldTextArea,
  yesNo: FormFieldYesNo,
  radio: FormFieldRadio,
  dropdown: FormFieldSelect,
  date: FormFieldDate,
  time: FormFieldTime,
  longtext: FormFieldLongText,
}

const FormField = ({ type, required, label, ...otherProps }) => {
  const Component = fieldComponents[type]

  if (required) label += '*'

  if (!Component) {
    console.error(`FormField of type "${type}" is not recognized.`)
    return null
  }

  return <Component {...otherProps} label={label} />
}

export default FormField
