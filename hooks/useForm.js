import useState from './useStateNew'

const useForm = initialState => {
  const [form, setForm, resetForm] = useState(initialState)

  const handleFieldChange = field => value => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return [form, handleFieldChange, resetForm]
}

export default useForm
