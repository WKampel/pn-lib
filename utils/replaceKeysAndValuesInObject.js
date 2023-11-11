import isObject from './isObject'

/**
 * Recursively replace keys and values in an object based on provided replacer functions.
 *
 * @param {Object} obj - The original object whose keys and values need to be replaced.
 * @param {Function} keyReplacer - A function to replace keys. It receives the current key and should return the new key.
 * @param {Function} valueReplacer - A function to replace values. It receives the current value and should return the new value.
 * @return {Object} result - The new object with replaced keys and values.
 */
const replaceKeysAndValuesInObject = (obj, keyReplacer, valueReplacer) => {
  // Initialize an empty object to store the results.
  let result = {}

  // Loop through each key in the original object.
  for (let key in obj) {
    // Ensure the key is a direct property of the object, not inherited.
    if (obj.hasOwnProperty(key)) {
      // Replace the current key using the keyReplacer function.
      const newKey = keyReplacer(key)

      // Get the value associated with the current key.
      const value = obj[key]

      // Check if the value is an object.
      if (isObject(value)) {
        // If the value is an object, recurse with the same replacer functions.
        result[newKey] = replaceKeysAndValuesInObject(value, keyReplacer, valueReplacer)
      } else {
        // If the value is not an object, replace the value using the valueReplacer function.
        result[newKey] = valueReplacer(value)
      }
    }
  }

  // Return the result object with replaced keys and values.
  return result
}

// Export the replaceKeysAndValuesInObject function as the default export.
export default replaceKeysAndValuesInObject
