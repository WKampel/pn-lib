import { IconSet } from '../types/IconSet'
import { generateImageIconSet } from '../utils/generateImageIconSet'
import { dentalset1, dentalset2, dentalset3, dentalset4, dentalset5, dentalset6 } from './dentalSets'

export const serviceIconSet: IconSet = {
  ...generateImageIconSet(dentalset1, 'dentalset1'),
  ...generateImageIconSet(dentalset2, 'dentalset2'),
  ...generateImageIconSet(dentalset3, 'dentalset3'),
  ...generateImageIconSet(dentalset4, 'dentalset4'),
  ...generateImageIconSet(dentalset5, 'dentalset5'),
  ...generateImageIconSet(dentalset6, 'dentalset6'),
}
