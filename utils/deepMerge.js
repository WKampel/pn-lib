import isObject from './isObject'

const deepMerge = (...objects) => {
  return objects.reduce((acc, obj) => {
    if (isObject(acc) && isObject(obj)) {
      Object.keys(obj).forEach(key => {
        if (isObject(obj[key])) {
          if (!(key in acc)) {
            acc[key] = { ...obj[key] }
          } else {
            acc[key] = deepMerge(acc[key], obj[key])
          }
        } else {
          acc[key] = obj[key]
        }
      })
    }
    return acc
  }, {})
}

export default deepMerge
