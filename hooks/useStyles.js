import { useMemo } from 'react'
import deepMerge from '../utils/deepMerge'
import replaceKeysAndValuesInObject from '../utils/replaceKeysAndValuesInObject'
import useStyleTokens from './useStyleTokens'

const useStyles = (styleConfig, variants = [], states, styleOverride) => {
  const tokens = useStyleTokens()

  const mergedStyles = useMemo(() => {
    return deepMerge(
      {},
      styleConfig.base,
      ...Object.entries(variants).map(([variantKey, variantValue]) => styleConfig[variantKey]?.[variantValue]),
      styleOverride
    )
  }, [styleConfig, variants, styleOverride])

  const processStyles = useMemo(() => {
    const process = styles => {
      let baseStyles = {}
      let stateStyles = {}

      // Separate the base styles and state styles
      for (const [key, value] of Object.entries(styles)) {
        if (key.startsWith('@') && states?.[key.slice(1)]) {
          stateStyles = { ...stateStyles, ...value }
        } else if (typeof value === 'object' && !Array.isArray(value)) {
          baseStyles[key] = process(value)
        } else {
          baseStyles[key] = value
        }
      }

      // Apply state styles after all base styles to ensure they take precedence
      return { ...baseStyles, ...stateStyles }
    }

    return process(mergedStyles)
  }, [mergedStyles, states])

  const finalStyles = useMemo(() => {
    const keyReplacer = key => key
    const valueReplacer = value => {
      if (typeof value === 'string' && value.startsWith('$')) {
        if (!tokens[value]) {
          console.error('Token not found: ', value, 'in', tokens)
        } else {
          return tokens[value]
        }
      }
      return value
    }
    return replaceKeysAndValuesInObject(processStyles, keyReplacer, valueReplacer)
  }, [processStyles, tokens])

  return finalStyles
}

export default useStyles
