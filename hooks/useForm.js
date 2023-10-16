import useState from './useStateNew'

const useForm = initialState => {
  const [form, setForm, resetForm] = useState(initialState)

  const onChangeField = field => value => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return { form, onChangeField, resetForm, setForm }
}

export default useForm
