import { TextStyle } from 'react-native'

type Defined<T> = Exclude<T, undefined>

export const tokens: {
  color_danger: Defined<TextStyle['color']>
  color_info: Defined<TextStyle['color']>
  color_success: Defined<TextStyle['color']>
  font_size_l: Defined<TextStyle['fontSize']>
  font_size_m: Defined<TextStyle['fontSize']>
  font_size_s: Defined<TextStyle['fontSize']>
  font_size_xl: Defined<TextStyle['fontSize']>
  font_size_xxl: Defined<TextStyle['fontSize']>
  font_size_xs: Defined<TextStyle['fontSize']>
  font_size_xxs: Defined<TextStyle['fontSize']>
  radius_l: Defined<TextStyle['borderRadius']>
  radius_m: Defined<TextStyle['borderRadius']>
  radius_round: Defined<TextStyle['borderRadius']>
  radius_s: Defined<TextStyle['borderRadius']>
  radius_sharp: Defined<TextStyle['borderRadius']>
  radius_xs: Defined<TextStyle['borderRadius']>
  size_l: number
  size_m: number
  size_s: number
  size_xxl: number
  size_xl: number
  size_xs: number
  spacing_l: Defined<TextStyle['letterSpacing']>
  spacing_m: Defined<TextStyle['letterSpacing']>
  spacing_s: Defined<TextStyle['letterSpacing']>
  spacing_xl: Defined<TextStyle['letterSpacing']>
  spacing_xs: Defined<TextStyle['letterSpacing']>
  spacing_xxs: Defined<TextStyle['letterSpacing']>
  weight_heavy: Defined<TextStyle['fontWeight']>
  weight_light: Defined<TextStyle['fontWeight']>
  weight_semi_heavy: Defined<TextStyle['fontWeight']>
} = {
  color_danger: 'rgb(220, 80, 80)',
  color_info: '#739ec9',
  color_success: '#84c973',
  font_size_l: 20,
  font_size_m: 17,
  font_size_s: 14,
  font_size_xl: 23,
  font_size_xxl: 30,
  font_size_xs: 12,
  font_size_xxs: 10,
  radius_l: 14,
  radius_m: 11,
  radius_round: 9999,
  radius_s: 8,
  radius_sharp: 2,
  radius_xs: 5,
  size_l: 48,
  size_m: 40,
  size_s: 32,
  size_xl: 56,
  size_xxl: 64,
  size_xs: 24,
  spacing_l: 24,
  spacing_m: 18,
  spacing_s: 12,
  spacing_xl: 30,
  spacing_xs: 6,
  spacing_xxs: 3,
  weight_heavy: '600',
  weight_light: '200',
  weight_semi_heavy: '500',
}
