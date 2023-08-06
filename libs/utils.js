import { Platform } from 'react-native'

export function deepMerge(obj1, obj2) {
  const output = { ...obj1 }
  if (isObject(obj1) && isObject(obj2)) {
    Object.keys(obj2).forEach(key => {
      if (isObject(obj2[key])) {
        if (!(key in obj1)) Object.assign(output, { [key]: obj2[key] })
        else output[key] = deepMerge(obj1[key], obj2[key])
      } else {
        Object.assign(output, { [key]: obj2[key] })
      }
    })
  }
  return output
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

export function mobileStyles(styles) {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    return styles
  }
  return {}
}
