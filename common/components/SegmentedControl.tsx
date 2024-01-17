import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type SegmentedControlProps<T> = {
  options: T[]
  value: T
  onChange: (option: T) => void
}

export function SegmentedControl<T extends string>(props: SegmentedControlProps<T>) {
  const tokens = useTheme()
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: tokens.radius_xs,
        backgroundColor: tokens.color_ui_secondary,
        padding: tokens.spacing_xxs,
        borderColor: tokens.color_border_on_surface_intense,
      }}
    >
      {props.options.map(option => {
        const active = option === props.value
        return (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              height: tokens.size_s,
              paddingHorizontal: tokens.spacing_s,
              borderWidth: active ? 1 : undefined,
              backgroundColor: active ? 'white' : undefined,
              borderRadius: tokens.radius_xs,
              borderColor: tokens.color_border_on_surface_intense,
            }}
            onPress={() => props.onChange(option)}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
