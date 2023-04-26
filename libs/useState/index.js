const { useState: useReactState, useEffect } = require('react')
const { useIsFocused } = require('@react-navigation/native')

const useState = initialVal => {
  const [val, set] = useReactState(initialVal)
  const isFocused = useIsFocused()

  useEffect(() => {
    set(initialVal)
  }, [isFocused])

  const push = item => {
    if (!Array.isArray(val)) return
    set([...val, item])
  }

  const setArrayVal = (index, item) => {
    if (!Array.isArray(val)) return
    let copy = [...val]
    copy[index] = item
    set(copy)
  }
  return {
    val,
    set,
    push,
    setArrayVal,
  }
}

export default useState
