import { useContext, useMemo, useState } from 'react'
import { WakuiContext } from './configProvider'
import StyleProvider from './styleProvider'
import { applyVariantsToStyles, mergeVariants, resolveTokens } from './utils'

export const styled = (getComponentProps, Component) => {
  return ({ children, ...passedProps }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    // Get global wakui variables
    const { tokens, getVariants: getGlobalVariants } = useContext(WakuiContext)

    const {
      style,
      defaultVariants = {},
      variants: componentVariants = {},
      ...otherStyles
    } = useMemo(() => {
      return getComponentProps({ isFocused, isHovered, isPressed }) || {}
    }, [getComponentProps, isFocused, isHovered, isPressed])

    const variants = useMemo(
      () => resolveTokens(mergeVariants(getGlobalVariants({ isPressed, isFocused, isHovered }), componentVariants), tokens),
      [getGlobalVariants, componentVariants, tokens, isPressed, isFocused, isHovered]
    )
    const styles = useMemo(() => resolveTokens({ style, ...otherStyles }, tokens), [style, otherStyles, tokens])
    const appliedVariants = useMemo(() => resolveTokens({ ...defaultVariants, ...passedProps }, tokens), [passedProps, defaultVariants, tokens])
    const stylesWithVariants = useMemo(() => applyVariantsToStyles(styles, variants, appliedVariants), [styles, variants, appliedVariants])

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

    return (
      <Component
        {...defaultVariants}
        {...passedProps}
        {...stylesWithVariants}
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
        <StyleProvider style={style}>{children}</StyleProvider>
      </Component>
    )
  }
}
