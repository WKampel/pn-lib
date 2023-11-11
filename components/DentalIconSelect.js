import BaseIconSelect from './BaseIconSelect'
import DentalIcon from './DentalIcon'
import { dentalset1, dentalset2, dentalset3, dentalset4, dentalset5, dentalset6 } from './DentalIcons'

const sets = {
  dental1: Object.keys(dentalset1),
  dental2: Object.keys(dentalset2),
  dental3: Object.keys(dentalset3),
  dental4: Object.keys(dentalset4),
  dental5: Object.keys(dentalset5),
  dental6: Object.keys(dentalset6),
}

const DentalIconSelect = props => {
  return <BaseIconSelect getIcon={props => <DentalIcon {...props} />} sets={sets} {...props} />
}

export default DentalIconSelect
