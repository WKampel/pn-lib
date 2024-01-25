import { IconSet } from '../types/IconSet'

export const generateImageIconSet = (set: Record<string, string>, setName: string): IconSet => {
  return Object.keys(set).reduce((acc, name) => {
    acc[`${setName}:${name}`] = { type: 'image', label: name, source: set[name] }
    return acc
  }, {} as IconSet)
}
