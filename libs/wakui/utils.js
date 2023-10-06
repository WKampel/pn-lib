/**
 * Resolves tokens in an object using a token object.
 *
 * @param {Object} object - The object with potential tokens.
 * @param {Object} tokens - The token object for resolving style tokens.
 * @returns {Object} - A new object with tokens resolved to actual values.
 */
export const resolveTokens = (object, tokens) => {
  if (!object || !tokens) return object

  const resolveTokensRecursively = obj => {
    const result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key]
        if (typeof value === 'string' && value.startsWith('$')) {
          const [tokenType, tokenKey] = value.slice(1).split('.')
          result[key] = tokens[tokenType]?.[tokenKey] || value
        } else if (typeof value === 'object' && !Array.isArray(value)) {
          result[key] = resolveTokensRecursively(value)
        } else {
          result[key] = value
        }
      }
    }
    return result
  }

  return resolveTokensRecursively(object)
}

/**
 * Merges two sets of variants together, selectively overriding properties of the first set with those of the second set.
 *
 * This function calls `deepMerge` on the two sets of variants, ensuring that
 * the properties of the second set override those of the first set without discarding other properties.
 *
 * @param {Object} variants1 - The first set of variants.
 * @param {Object} variants2 - The second set of variants, whose properties will override those of the first set.
 * @returns {Object} - The merged set of variants.
 */
export function mergeVariants(variants1, variants2) {
  return deepMerge(variants1, variants2)
}

/**
 * Recursively merges two objects together.
 *
 * The function performs a deep merge, meaning that:
 * 1. If a key exists in obj2 but not in obj1, it will be added to the output.
 * 2. If a key exists in both obj1 and obj2, and both values are objects,
 *    it will recurse into those objects and merge them too.
 * 3. If a key exists in both obj1 and obj2, and either value is not an object,
 *    the value from obj2 will overwrite the value from obj1.
 *
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object, whose properties will override those of the first object.
 * @returns {Object} - The merged object.
 */
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

// Utility function to apply variants to styles
export function applyVariantsToStyles(styles, variants, appliedVariants) {
  let output = { ...styles }

  for (const [variantCategory, variantSpecifier] of Object.entries(appliedVariants)) {
    // Verify variant for this prop exists. Eg...size, space
    const variantConfig = variants[variantCategory]
    if (!variantConfig) continue

    const styleUpdates = variantConfig[variantSpecifier]
      ? variantConfig[variantSpecifier]
      : variantConfig.other
      ? typeof variantConfig?.other === 'function'
        ? variantConfig.other({ value: variantSpecifier })
        : variantConfig.other
      : undefined

    if (!styleUpdates) continue

    for (const [styleKey, styleValue] of Object.entries(styleUpdates)) {
      if (typeof styleValue === 'object') {
        output[styleKey] = {
          ...(output[styleKey] || {}),
          ...styleValue,
        }
      } else {
        output.style = { ...(output.style || {}), [styleKey]: styleValue }
      }
    }
  }
  return output
}

export function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
}

export function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return [r, g, b]
}

export function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [h * 360, s * 100, l * 100]
}

export function hslToRgb(h, s, l) {
  h /= 360
  s /= 100
  l /= 100
  let r, g, b

  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return `#${Math.round(r * 255)
    .toString(16)
    .padStart(2, '0')}${Math.round(g * 255)
    .toString(16)
    .padStart(2, '0')}${Math.round(b * 255)
    .toString(16)
    .padStart(2, '0')}`
}

export function colorToRgb(color) {
  if (color.startsWith('#')) {
    return hexToRgb(color)
  } else {
    return color.match(/\d+/g).map(Number)
  }
}

export function copyHue(color1, color2) {
  const rgb1 = colorToRgb(color1)
  const rgb2 = colorToRgb(color2)

  const [h1, s1, l1] = rgbToHsl(...rgb1)
  const [h2] = rgbToHsl(...rgb2)

  return hslToRgb(h2, s1, l1)
}

export function copySaturation(color1, color2) {
  const rgb1 = colorToRgb(color1)
  const rgb2 = colorToRgb(color2)

  const [h1, , l1] = rgbToHsl(...rgb1)
  const [, s2] = rgbToHsl(...rgb2)

  return hslToRgb(h1, s2, l1)
}

export function copyBrightness(color1, color2) {
  const rgb1 = colorToRgb(color1)
  const rgb2 = colorToRgb(color2)

  const [h1, s1] = rgbToHsl(...rgb1)
  const [, , l2] = rgbToHsl(...rgb2)

  return hslToRgb(h1, s1, l2)
}

export function adjustSaturation(color, amount) {
  const rgb = colorToRgb(color)
  const [h, s, l] = rgbToHsl(...rgb)

  // Ensure the new saturation value stays within the range [0, 100]
  const newSaturation = Math.min(100, Math.max(0, s + amount))

  return hslToRgb(h, newSaturation, l)
}

export function adjustBrightness(color, amount) {
  const rgb = colorToRgb(color)
  const [h, s, l] = rgbToHsl(...rgb)

  // Ensure the new brightness value stays within the range [0, 100]
  const newBrightness = Math.min(100, Math.max(0, l + amount))

  return hslToRgb(h, s, newBrightness)
}
