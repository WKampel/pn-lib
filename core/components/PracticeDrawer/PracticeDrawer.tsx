import { ReactNode } from 'react'
import { PracticeDrawerItemType } from '../../types/PracticeDrawerItemType'
import { Drawer } from '../Drawer'
import { PracticeDrawerContent } from './PracticeDrawerContent'

type PracticeDrawerProps = {
  switchPractice?: () => void
  items: PracticeDrawerItemType[]
  children: ReactNode
  firstName: string
  lastName: string
  onPressProfile: () => void
  bottom?: ReactNode
}

export const PracticeDrawer = ({ children, switchPractice, items, firstName, lastName, onPressProfile, bottom }: PracticeDrawerProps) => {
  return (
    <Drawer
      drawerContent={() => (
        <PracticeDrawerContent bottom={bottom} firstName={firstName} lastName={lastName} onPressProfile={onPressProfile} items={items} switchPractice={switchPractice} />
      )}
    >
      {children}
    </Drawer>
  )
}
