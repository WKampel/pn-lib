import Radio from '../../Radio'

const FormFieldRadio = ({ value, onChange, label, options }) => {
  return (
    <Radio value={value} onChange={onChange} label={label} options={options} getLabel={option => option.value} getValue={option => option.value} />
  )
}

export default FormFieldRadio
