import TextInput from '../../TextInput'

const FormFieldTextArea = ({ value, onChange, label }) => {
  return <TextInput multiline={true} value={value} onChange={onChange} label={label} />
}

export default FormFieldTextArea
