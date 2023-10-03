import { useState as useReactState } from 'react'

const useState = initialState => {
  const [val, set] = useReactState(initialState)

  const reset = () => {
    set(initialState)
  }

  return [val, set, reset]
}

export default useState
