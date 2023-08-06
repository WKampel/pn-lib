import Drawer from './Drawer'
import PracticeDrawerContent from './PracticeDrawerContent'

const PracticeDrawer = ({ customItems, extraChildren, screens }) => {
  return (
    <Drawer drawerContent={props => <PracticeDrawerContent {...props} customItems={customItems} extraChildren={extraChildren} />} screens={screens} />
  )
}

export default PracticeDrawer
