const { useState: useReactState, useEffect } = require('react')
const { useIsFocused } = require('@react-navigation/native')

const useState = (initialVal, options) => {
  const [val, set] = useReactState(initialVal)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (options?.persist === false) set(initialVal)
  }, [isFocused])

  const arrayPush = item => {
    if (!Array.isArray(val)) return
    set(val => [...val, item])
  }

  const arrayInsert = (index, item) => {
    if (!Array.isArray(val)) return
    set(val => {
      let copy = [...val]
      copy[index] = item
      return copy
    })
  }

  const arrayDelete = index => {
    if (!Array.isArray(val)) return
    set(val => {
      return val.filter((item, i) => i !== index)
    })
  }

  const arrayUpsert = (item, upsertProps = null) => {
    if (!Array.isArray(val)) return
    let copy = [...val]
    const foundIndex = copy.findIndex(elem => {
      if (!upsertProps) return elem === item
      for (let i = 0; i < upsertProps.length; i++) {
        if (elem[upsertProps[i]] !== item[upsertProps[i]]) return false
      }
      return true
    })
    if (foundIndex === -1) {
      arrayPush(item)
    } else {
      arrayInsert(foundIndex, item)
    }
  }

  const objectInsert = (index, item) => {
    if (typeof val !== 'object' || val === null) return

    set(val => {
      let copy = { ...val }
      copy[index] = item
      return copy
    })
  }

  return {
    val,
    set,
    object: {
      insert: objectInsert,
    },
    array: {
      push: arrayPush,
      insert: arrayInsert,
      upsert: arrayUpsert,
      delete: arrayDelete,
    },
  }
}

export default useState
