import { useState as useReactState } from 'react'

const useState = initialVal => {
  const [val, set] = useReactState(initialVal)

  const reset = () => {
    set(initialVal)
  }

  return {
    val,
    set,
    reset,
    array: {
      remove: index => {
        if (!Array.isArray(val)) return
        set(prev => prev.filter((item, i) => i !== index))
      },
      update: (index, newVal) => {
        if (!Array.isArray(val)) return
        set(prev => prev.map((item, i) => (i === index ? newVal : item)))
      },
      push: newVal => {
        if (!Array.isArray(val)) return
        set(prev => [...prev, newVal])
      },
    },
  }
}

export default useState
