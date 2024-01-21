import { ExpoVectorSet, IconSet } from '../types/IconSet'

export const generateExpoVectorIconSet = (set: ExpoVectorSet, setName: string): IconSet => {
  return Object.keys(set.glyphMap).reduce((acc, name) => {
    acc[`${setName}:${name}`] = { type: 'expo-vector', name, label: name, set }
    return acc
  }, {} as IconSet)
}
