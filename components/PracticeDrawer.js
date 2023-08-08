import Drawer from './Drawer'
import PracticeDrawerContent from './PracticeDrawerContent'

const PracticeDrawer = ({ customItems, extraChildren, screens, switchPractice }) => {
  return (
    <Drawer
      drawerContent={props => (
        <PracticeDrawerContent {...props} switchPractice={switchPractice} customItems={customItems} extraChildren={extraChildren} />
      )}
      screens={screens}
    />
  )
}

export default PracticeDrawer
