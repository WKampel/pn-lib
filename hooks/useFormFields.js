import uuid from 'react-native-uuid'
import useState from './useState'

const useFormFields = () => {
  const fields = useState([])

  function addFieldToStart() {
    fields.set(prev => [{ type: 'title', id: uuid.v4() }, ...prev])
  }
  function addFieldToEnd() {
    fields.array.push({ type: 'title', id: uuid.v4() })
  }

  function setName(fieldIndex, name) {
    fields.array.update(fieldIndex, { ...fields.val[fieldIndex], name })
  }

  function setFields(_fields) {
    fields.set(
      _fields.map(field => ({
        id: uuid.v4(),
        ...field,
      }))
    )
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

  function up(fieldIndex) {
    if (fieldIndex <= 0) return

    fields.set(prevFields => {
      const newFields = [...prevFields]
      ;[newFields[fieldIndex - 1], newFields[fieldIndex]] = [newFields[fieldIndex], newFields[fieldIndex - 1]]
      return newFields
    })
  }

  function down(fieldIndex) {
    if (fieldIndex >= fields.val.length - 1) return

    fields.set(prevFields => {
      const newFields = [...prevFields]
      ;[newFields[fieldIndex + 1], newFields[fieldIndex]] = [newFields[fieldIndex], newFields[fieldIndex + 1]]
      return newFields
    })
  }

  return {
    fields: fields.val,
    setName,
    setType,
    setActive,
    setOption,
    addOption,
    deleteOption,
    addFieldToStart,
    addFieldToEnd,
    deleteField,
    setFields,
    up,
    down,
  }
}

export default useFormFields
