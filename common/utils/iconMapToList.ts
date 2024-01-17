import { IconList } from '../types/IconList'
import { IconMap } from '../types/IconMap'

export const iconMapToList = (iconMap: IconMap): IconList[] => {
  return Object.keys(iconMap)
    .sort((a, b) => a.localeCompare(b))
    .map(key => ({ id: key, ...iconMap[key] }))
}
