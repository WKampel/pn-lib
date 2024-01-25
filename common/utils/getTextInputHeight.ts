import { ThemeType } from '../contexts/ThemeContext'
import { TextInputSize } from '../types/TextInputSize'

export const getTextInputHeight = (tokens: ThemeType, size: TextInputSize) => {
  const heightMap = {
    s: tokens.size_s,
    m: tokens.size_m,
    l: tokens.size_l,
  }
  return heightMap[size]
}
