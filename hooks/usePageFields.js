import { useState } from 'react'

const usePageFields = () => {
  const [fields, setFields] = useState([])

  function updateFieldProp(fieldId, propName, value) {
    setFields(prev => prev.map(item => (item.id === fieldId ? { ...item, [propName]: value } : item)))
  }

  const setType = (fieldId, type) => updateFieldProp(fieldId, 'type', type)
  const setValue = (fieldId, value) => updateFieldProp(fieldId, 'value', value)

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
