import { useEffect, useState } from 'react'
import { areObjectsEqual } from '../../core/utils/areObjectsEqual'

interface FormState {
  [key: string]: unknown
}

export const useForm = <T extends FormState>(initialStateValue: T) => {
  const [data, setData] = useState<T>(initialStateValue)
  const [initialState, setInitialState] = useState<T>(initialStateValue)
  const [isModified, setIsModified] = useState<boolean>(false)

  useEffect(() => {
    setIsModified(!areObjectsEqual(data, initialState))
  }, [data, initialState])

  const onChangeField =
    <K extends keyof T>(field: K) =>
    (value: T[K]) => {
      setData(prev => ({ ...prev, [field]: value }))
    }

  const resetForm = () => {
    setData(initialState)
    setIsModified(false)
  }

  const updateInitialState = (newInitialState: T, resetForm: boolean = false) => {
    setInitialState(newInitialState)
    if (resetForm) {
      setData(newInitialState)
      setIsModified(false)
    }
  }

  return { data, onChangeField, setData, resetForm, isModified, updateInitialState }
}
