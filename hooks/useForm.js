import { useEffect, useState } from 'react'

const useForm = initialStateValue => {
  if (typeof initialStateValue !== 'object') {
    throw new Error('useForm must be initialized with an object')
  }

  const [form, setForm] = useState(initialStateValue)
  const [initialState, setInitialState] = useState(initialStateValue)
  const [modified, setModified] = useState(false)

  useEffect(() => {
    setModified(!areEqual(form, initialState))
  }, [form, initialState])

  const onChangeField = field => value => {
    setForm(prev => {
      const newState = { ...prev, [field]: value }
      return newState
    })
  }

  const resetForm = () => {
    setForm(initialState)
    setModified(false)
  }

  const updateInitialState = initialState => {
    setInitialState(initialState)
  }

  const updateInitialStateAndForm = newInitialState => {
    updateInitialState(newInitialState)
    setForm(newInitialState)
    setModified(false)
  }

  return { form, onChangeField, setForm, resetForm, modified, updateInitialStateAndForm, updateInitialState }
}

function areEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export default useForm
