import { TextStyle, ViewStyle } from 'react-native'

export const theme: {
  color_bg: ViewStyle['backgroundColor']
  color_bg_surface: ViewStyle['backgroundColor']
  color_bg_surface_alternate: ViewStyle['backgroundColor']
  color_bg_surface_disabled: ViewStyle['backgroundColor']
  color_bg_surface_emphasis: ViewStyle['backgroundColor']
  color_bg_surface_inverse: ViewStyle['backgroundColor']
  color_border_on_surface: ViewStyle['borderColor']
  color_border_on_surface_intense: ViewStyle['borderColor']
  color_border_on_surface_semi_intense: ViewStyle['borderColor']
  color_border_on_surface_subtle: ViewStyle['borderColor']
  color_text_on_bg: TextStyle['color']
  color_text_on_bg_subtle: TextStyle['color']
  color_text_on_primary: TextStyle['color']
  color_text_on_primary_subtle: TextStyle['color']
  color_text_on_secondary: TextStyle['color']
  color_text_on_secondary_subtle: TextStyle['color']
  color_text_on_surface: TextStyle['color']
  color_text_on_surface_inverse: TextStyle['color']
  color_text_on_surface_subtle: TextStyle['color']
  color_ui_primary: ViewStyle['backgroundColor']
  color_ui_secondary: ViewStyle['backgroundColor']
  opacity_hovered: ViewStyle['opacity']
  opacity_pressed: ViewStyle['opacity']
} = {
  color_bg: 'white',
  color_bg_surface: 'white',
  color_bg_surface_alternate: 'whitesmoke',
  color_bg_surface_disabled: 'rgb(220, 220, 220)',
  color_bg_surface_emphasis: 'rgb(220, 220, 220)',
  color_bg_surface_inverse: '#36304a',
  color_border_on_surface: 'rgb(230, 230, 230)',
  color_border_on_surface_intense: 'rgb(180,180,180)',
  color_border_on_surface_semi_intense: 'rgb(210, 210, 210)',
  color_border_on_surface_subtle: 'rgb(rgb(240, 240, 240)',
  color_text_on_bg: 'black',
  color_text_on_bg_subtle: 'darkgray',
  color_text_on_primary: 'white',
  color_text_on_primary_subtle: 'lightgray',
  color_text_on_secondary: 'black',
  color_text_on_secondary_subtle: 'darkgray',
  color_text_on_surface: 'black',
  color_text_on_surface_inverse: 'white',
  color_text_on_surface_subtle: 'darkgray',
  color_ui_primary: '#739ec9',
  color_ui_secondary: 'rgb(230, 230, 230)',
  opacity_hovered: 0.85,
  opacity_pressed: 0.7,
}
