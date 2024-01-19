import { IconMap } from '../types/IconMap'
import { dentalset1, dentalset2, dentalset3, dentalset4, dentalset5, dentalset6 } from './dentalSets'

const generateSetIcons = (set: Record<string, string>, setName: string): IconMap => {
  return Object.keys(set).reduce((acc, name) => ({ ...acc, [`${setName}:${name}`]: { label: name, source: set[name] } }), {} as IconMap)
}

export const serviceIcons: IconMap = {
  ...generateSetIcons(dentalset1, 'dentalset1'),
  ...generateSetIcons(dentalset2, 'dentalset2'),
  ...generateSetIcons(dentalset3, 'dentalset3'),
  ...generateSetIcons(dentalset4, 'dentalset4'),
  ...generateSetIcons(dentalset5, 'dentalset5'),
  ...generateSetIcons(dentalset6, 'dentalset6'),
}
