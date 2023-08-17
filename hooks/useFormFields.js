import useState from './useState'

const useFormFields = () => {
  const fields = useState([])

  function addField() {
    fields.array.push({ type: 'title' })
  }

  function setName(fieldIndex, name) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], name })
  }

  function setFields(_fields) {
    fields.set(_fields)
  }

  function setType(fieldIndex, type) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], type })
  }

  function setActive(fieldIndex, active) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], active })
  }

  function addOption(fieldIndex) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], options: [...(fields.val[fieldIndex]?.options || []), ''] })
  }

  function setOption(fieldIndex, optionIndex, val) {
    let copy = [...(fields.val[fieldIndex]?.options || [])]
    copy[optionIndex] = val
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], options: copy })
  }

  function deleteOption(fieldIndex, optionIndex) {
    let copy = [...(fields.val[fieldIndex]?.options || [])]
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], options: copy.filter((item, i) => i !== optionIndex) })
  }

  function deleteField(fieldIndex) {
    fields.set(prev => prev.filter((item, i) => i !== fieldIndex))
  }

  return {
    fields: fields.val,
    setName,
    setType,
    setActive,
    setOption,
    addOption,
    deleteOption,
    addField,
    deleteField,
    setFields,
  }
}

export default useFormFields
