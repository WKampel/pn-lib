import { useContext, useMemo, useState } from 'react'
import { WakuiContext } from './configProvider'
import StyleProvider from './styleProvider'
import { convertAliases, extractValidStyleProps, extractVariantStyles, mergeTokens, resolveStyleTokens } from './utils'

export const styled = (getProps, Component) => {
  return passedProps => {
    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const {
      tokens: componentTokens = {},
      variants: componentVariants = {},
      ...componentProps
    } = useMemo(() => {
      return getProps({ isFocused, isHovered, isPressed }) || {}
    }, [getProps, isFocused, isHovered, isPressed])

    function handleOnFocus() {
      if (passedProps.onFocus) passedProps.onFocus()
      setIsFocused(true)
    }

    function handleOnBlur() {
      if (passedProps.onBlur) passedProps.onBlur()
      setIsFocused(false)
    }

    function handleOnMouseEnter() {
      setIsHovered(true)
    }

    function handleOnMouseLeave() {
      setIsHovered(false)
    }

    function handleOnPressIn() {
      if (passedProps.onPressIn) passedProps.onPressIn()
      setIsPressed(true)
    }

    function handleOnPressOut() {
      if (passedProps.onPressOut) passedProps.onPressOut()
      setIsPressed(false)
    }

    // Get global wakui variables
    const { tokens: globalTokens, styleAliases, variants: globalVariants } = useContext(WakuiContext)

    // Merge global variants with component variants
    const variants = useMemo(() => ({ ...globalVariants, ...componentVariants }), [globalVariants, componentProps, passedProps])

    // Deep merge global tokens with component tokens
    const tokens = useMemo(() => mergeTokens(globalTokens, componentTokens), [globalTokens, componentTokens])

    // Merge component and passed props and get styles
    const variantStyles = useMemo(
      () => extractVariantStyles({ ...componentProps, ...passedProps }, variants),
      [componentProps, passedProps, variants]
    )

    // Merge component props, variant styles, and passed props
    const mergedProps = { ...componentProps, ...variantStyles, ...passedProps }

    // Convert aliases
    const aliasedStyles = useMemo(() => convertAliases(mergedProps, styleAliases), [mergedProps, styleAliases])

    // Remove invalid style properties (componentProps and passedProps might contain some)
    const validStyles = useMemo(() => extractValidStyleProps(aliasedStyles), [aliasedStyles])

    // Replace tokens with values
    const style = useMemo(() => resolveStyleTokens(validStyles, tokens), [validStyles])

    return (
      <Component
        {...passedProps}
        style={style}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onPressIn={handleOnPressIn}
        onPressOut={handleOnPressOut}
        isFocused={isFocused}
        isHovered={isHovered}
        isPressed={isPressed}
      >
        <StyleProvider style={style}>{passedProps.children}</StyleProvider>
      </Component>
    )
  }
}
