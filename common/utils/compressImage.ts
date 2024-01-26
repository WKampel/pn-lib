import { SaveFormat, manipulateAsync } from 'expo-image-manipulator'

type CompressImageInput = {
  uri: string
  width: number
  height: number
}

export async function compressImage(input: CompressImageInput) {
  const dimension = input.width > input.height ? 'width' : 'height'
  const maxValue = input.width > input.height ? 500 : 500
  const resize = input[dimension] > maxValue ? { resize: { [dimension]: maxValue } } : null
  const actions = resize ? [resize] : []
  return await manipulateAsync(input.uri, actions, { compress: 1, format: SaveFormat.PNG })
}
