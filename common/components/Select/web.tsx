import React, { cloneElement, isValidElement, useState } from 'react'
import { View } from 'react-native'
import ReactSelect, { GroupBase, MenuListProps, OptionProps, ValueContainerProps, components, createFilter } from 'react-select'
import { FixedSizeList } from 'react-window'
import { SelectProps } from '.'
import { useTheme } from '../../hooks/useTheme'
import { IconProps } from '../../types/IconProps'

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    getLabelIcon?: (option: Option) => React.ReactElement<IconProps>
  }
}

const Select = <TOption extends any, TValue extends string>({
  value,
  onChange,
  options,
  label = 'Select',
  getLabel,
  getValue,
  getLabelIcon,
  flex,
}: SelectProps<TOption, TValue>) => {
  const selectedOption = options.find(option => getValue(option) === value)

  const { tokens } = useTheme()

  return (
    <ReactSelect<TOption>
      menuPosition='fixed'
      placeholder={label}
      getOptionLabel={getLabel}
      getOptionValue={getValue}
      styles={{
        container: (baseStyles, state) => ({
          ...baseStyles,
          flex: flex === true ? 1 : flex ? flex : undefined,
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: tokens.size_m,
          borderColor: state.isFocused ? tokens.color_ui_primary.toString() : tokens.color_border_on_surface.toString(),
          borderWidth: 1.5,
          borderRadius: tokens.radius_xs as number,
          backgroundColor: 'rgb(250, 250, 250)',
          '&:hover': {},
          boxShadow: 'none',
        }),
        menuPortal: (baseStyles, state) => ({
          ...baseStyles,
          zIndex: 9999,
        }),
      }}
      menuPortalTarget={document.body}
      options={options}
      value={selectedOption}
      onChange={option => option && onChange(getValue(option))}
      components={{
        MenuList: CustomMenuList,
        ValueContainer: CustomValueContainer,
        Option: CustomOption,
      }}
      // Improve performance // https://www.botsplash.com/post/optimize-your-react-select-component-to-smoothly-render-10k-data
      filterOption={createFilter({ ignoreAccents: false })}
      getLabelIcon={getLabelIcon}
    />
  )
}

type CustomValueContainerProps<TOption> = ValueContainerProps<TOption, false, GroupBase<TOption>>

const CustomValueContainer = <TOption extends any>(props: CustomValueContainerProps<TOption>) => {
  const getLabelIcon = props.selectProps.getLabelIcon

  const selectedOption = props.getValue()[0]
  const icon = selectedOption && getLabelIcon ? getLabelIcon(selectedOption) : null // Use your getLabelIcon function

  return (
    <components.ValueContainer {...props}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon ? <View style={{ marginRight: 10 }}>{isValidElement(icon) ? cloneElement(icon, { size: 20 }) : null}</View> : null}
        {props.children}
      </View>
    </components.ValueContainer>
  )
}

type CustomMenuListProps<TOption> = MenuListProps<TOption, false, GroupBase<TOption>> & {}

const height = 35 // Height of each option

const CustomMenuList = <TOption extends any>(props: CustomMenuListProps<TOption>) => {
  const [value] = props.getValue()
  const initialOffset = props.options.indexOf(value) * height

  const children = React.Children.toArray(props.children)
  const itemCount = children.length

  const [width, setWidth] = useState(0)

  return (
    <View
      onLayout={event => {
        const { width } = event.nativeEvent.layout
        setWidth(width)
      }}
    >
      <FixedSizeList height={props.maxHeight} itemCount={itemCount} itemSize={height} initialScrollOffset={initialOffset} width={width}>
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </FixedSizeList>
    </View>
  )
}

type CustomOptionProps<TOption> = OptionProps<TOption, false>

const CustomOption = <TOption extends any>(props: CustomOptionProps<TOption>) => {
  const getLabelIcon = props.selectProps.getLabelIcon

  const { tokens } = useTheme()
  const { data } = props
  const icon = getLabelIcon ? getLabelIcon(data) : null
  return (
    <components.Option {...props}>
      <View style={{ flexDirection: 'row', gap: tokens.spacing_xs, alignItems: 'center' }}>
        {isValidElement(icon) ? cloneElement(icon, { size: 20 }) : null}
        {props.children}
      </View>
    </components.Option>
  )
}

export default Select
