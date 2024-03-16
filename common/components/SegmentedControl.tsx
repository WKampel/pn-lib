import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type SegmentedControlProps<T> = {
  options: T[]
  value: T
  onChange: (option: T) => void
}

export function SegmentedControl<T extends string>(props: SegmentedControlProps<T>) {
  const { tokens } = useTheme()
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: tokens.radius_xs,
        height: tokens.size_m,
        gap: 1,
        backgroundColor: tokens.color_ui_primary,
        borderColor: tokens.color_ui_primary,
        borderWidth: 1,
        overflow: 'hidden',
      }}
    >
      {props.options.map(option => {
        const active = option === props.value
        return (
          <TouchableOpacity
            style={{
              height: '100%',
              justifyContent: 'center',
              paddingHorizontal: tokens.spacing_m,
              backgroundColor: active ? tokens.color_ui_primary : 'white',
            }}
            onPress={() => props.onChange(option)}
          >
            <Text
              style={{
                color: active ? 'white' : tokens.color_ui_primary,
                fontWeight: tokens.weight_semi_heavy,
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
