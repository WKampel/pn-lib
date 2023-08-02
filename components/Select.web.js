import { useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import useState from '../hooks/useState'
import TextInput from './TextInput'

export default props => {
  const isOpen = useState(false)
  const containerRef = useRef()

  const getLabel = option => (props.getLabel && props.getLabel(option)) || (option && option.label) || option
  const getValue = option => (props.getValue && props.getValue(option)) || (option && option.value) || option

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        isOpen.set(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [containerRef])

  function handlePress(e) {
    if (e.keyCode === 9) isOpen.set(false)
  }

  return (
    <View ref={containerRef}>
      <TextInput
        onKeyPress={handlePress}
        onFocus={() => isOpen.set(true)}
        state={{ set: () => {}, val: props.state.val }}
        label={props.label}
        placeholder='Select'
      />
      {isOpen?.val ? (
        <View style={styles.menu}>
          {props.options?.map(option => {
            const value = getValue(option)
            const label = getLabel(option)

            if (value === props.state.val) return null

            return (
              <TouchableOpacity style={styles.item} activeOpacity={0.5} onPress={() => props.state.set(value)} key={value} label={label}>
                {getLabel(option)}
              </TouchableOpacity>
            )
          })}
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgb(220,220,220)',
    borderRadius: 3,
    overflow: 'scroll',
  },

  item: {
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
})
