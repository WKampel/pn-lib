import validStyleProps from './validStyleProps'

/**
 * Converts style property aliases to their actual names based on a provided mapping.
 *
 * @param {Object} styles - The object containing styles with possible aliases.
 * @param {Object} aliases - The mapping of aliases to actual style property names.
 * @returns {Object} - A new object with aliases converted to actual style property names.
 */
export const convertAliases = (styles, aliases) => {
  return Object.keys(styles).reduce((acc, key) => {
    const alias = aliases[key] || key
    acc[alias] = styles[key]
    return acc
  }, {})
}

/**
 * Filters through a `props` object, retaining only the keys that are valid React Native style properties.
 *
 * @param {Object} props - The object containing potential style properties.
 * @returns {Object} - A new object containing only valid style properties from the input.
 */
export const extractValidStyleProps = props => {
  return Object.keys(props).reduce((acc, key) => {
    if (validStyleProps[key]) {
      acc[key] = props[key]
    }
    return acc
  }, {})
}

/**
 * Merges multiple token objects into one, with later tokens overriding earlier ones.
 *
 * @param {...Object} tokens - The token objects to merge.
 * @returns {Object} - The merged token object containing all tokens from the input objects.
 */
export const mergeTokens = (...tokens) => {
  return tokens.reduce((acc, token) => {
    Object.keys(token).forEach(key => {
      acc[key] = { ...acc[key], ...token[key] }
    })
    return acc
  }, {})
}

/**
 * Resolves style tokens in a style object using a token object.
 *
 * @param {Object} style - The style object with potential tokens.
 * @param {Object} tokens - The token object for resolving style tokens.
 * @returns {Object} - A new style object with tokens resolved to actual values.
 */
export const resolveStyleTokens = (style, tokens) => {
  if (!style) return
  if (!tokens) return style
  return Object.fromEntries(
    Object.entries(style).map(([key, value]) => {
      if (typeof value === 'string' && value.startsWith('$')) {
        const [tokenType, tokenKey] = value.slice(1).split('.')
        return [key, tokens[tokenType]?.[tokenKey] || value]
      }
      return [key, value]
    })
  )
}

/**
 * Extracts variant styles from a props object based on a variants mapping.
 *
 * @param {Object} props
 * @param {Object} variants - The mapping of variant keys to functions.
 * @returns {Object} - A new object containing the resolved variant styles.
 */
export const extractVariantStyles = (props, variants) => {
  return Object.keys(variants).reduce((acc, key) => {
    const variant = variants[key]
    if (variant && variant[props[key]]) {
      return {
        ...acc,
        ...variant[props[key]],
      }
    }
    return acc
  }, {})
}
