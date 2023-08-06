import useState from './useState'

const usePageFields = () => {
  const fields = useState([])

  function setFields(_fields) {
    fields.set(_fields)
  }

  function addField() {
    fields.array.push({})
  }

  function deleteField(fieldIndex) {
    fields.set(prev => prev.filter((item, i) => i !== fieldIndex))
  }

  function setType(fieldIndex, type) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], type, size: 'medium', align: 'center' })
  }

  function setValue(fieldIndex, value) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], value })
  }

  function setFile(fieldIndex, file) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], file })
  }

  function setSize(fieldIndex, size) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], size })
  }

  function setAlign(fieldIndex, align) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], align })
  }

  return {
    fields: fields.val,
    setSize,
    setAlign,
    setType,
    addField,
    deleteField,
    setValue,
    setFile,
    setFields,
  }
}

export default usePageFields
