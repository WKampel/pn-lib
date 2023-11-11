import Select from '../../Select'

const FormFieldSelect = ({ value, onChange, label, options }) => {
  return (
    <Select value={value} onChange={onChange} label={label} options={options} getLabel={option => option.value} getValue={option => option.value} />
  )
}

export default FormFieldSelect
