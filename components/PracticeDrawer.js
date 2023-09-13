import Drawer from './Drawer'
import PracticeDrawerContent from './PracticeDrawerContent'

const getScreensWithComp = screens => {
  let result = []

  for (const screen of screens) {
    if (screen.comp) {
      result.push(screen)
    }

    if (screen.screens) {
      result = result.concat(getScreensWithComp(screen.screens))
    }
  }

  return result
}

const PracticeDrawer = ({ extraChildren, screens, switchPractice }) => {
  // Screens could contain folders/groups (if there is no comp property)

  const screensWithoutFoldersAndFlattened = getScreensWithComp(screens)

  return (
    <Drawer
      drawerContent={props => <PracticeDrawerContent screens={screens} {...props} switchPractice={switchPractice} extraChildren={extraChildren} />}
      screens={screensWithoutFoldersAndFlattened}
    />
  )
}

export default PracticeDrawer
