const usePlatformStyles = (styles = {}, platformStyles = {}) => {
  const applicableStyles = platformStyles[Platform.OS] || {}

  return Object.keys(styles).reduce((platformStyles, key) => {
    return {
      ...platformStyles,
      [key]: {
        ...styles[key],
        ...applicableStyles[key],
      },
    }
  }, {})
}
export default usePlatformStyles
