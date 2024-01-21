import React, { cloneElement, isValidElement } from 'react'
import { ColorValue, FlatList, TouchableOpacity, View } from 'react-native'
import ReactSelect, { GroupBase, MenuListProps, OptionProps, ValueContainerProps, components, createFilter } from 'react-select'
import { useTheme } from '../hooks/useTheme'

type LabelIconProps = {
  color: ColorValue
  size: number
}

export type SelectProps<TOption> = {
  value: any
  onChange: (value: string) => void
  options: TOption[]
  label: string
  getLabel: (option: TOption) => string
  getValue: (option: TOption) => string
  getLabelIcon?: (option: TOption) => React.ReactElement<LabelIconProps>
  flex?: boolean | number
}

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    getLabelIcon?: (option: Option) => React.ReactElement<LabelIconProps>
  }
}

export const Select = <TOption extends any>({ value, onChange, options, label = 'Select', getLabel, getValue, getLabelIcon, flex }: SelectProps<TOption>) => {
  const selectedOption = options.find(option => getValue(option) === value)

  const tokens = useTheme()

  return (
    <ReactSelect<TOption>
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
      }}
      menuPortalTarget={document.body}
      options={options}
      value={selectedOption}
      onChange={option => option && onChange(getValue(option))}
      components={{
        Option: CustomOption,
        MenuList: CustomMenuList,
        ValueContainer: CustomValueContainer,
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

type CustomOptionProps<TOption> = OptionProps<TOption, false>

const CustomOption = <TOption extends any>(props: CustomOptionProps<TOption>) => {
  const getLabelIcon = props.selectProps.getLabelIcon

  const tokens = useTheme()
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

type CustomMenuListProps<TOption> = MenuListProps<TOption, false, GroupBase<TOption>> & {}

const CustomMenuList = <TOption extends any>(props: CustomMenuListProps<TOption>) => {
  const getLabelIcon = props.selectProps.getLabelIcon
  const getLabel = props.selectProps.getOptionLabel

  const renderItem = ({ item }: { item: TOption }) => {
    const icon = getLabelIcon ? getLabelIcon(item) : null
    return (
      <TouchableOpacity onPress={() => props.selectOption(item)} style={{ flexDirection: 'row', gap: 5, alignItems: 'center', height: 30 }}>
        {isValidElement(icon) ? cloneElement(icon, { size: 20 }) : null}
        {getLabel(item)}
      </TouchableOpacity>
    )
  }
  return <FlatList initialNumToRender={3} style={{ height: 300 }} data={props.options as TOption[]} renderItem={renderItem} />
}
