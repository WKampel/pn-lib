export type PracticeDrawerItemType =
  | {
      type?: 'group'
      label: string
      items: PracticeDrawerItemType[]
    }
  | {
      type?: 'item'
      label: string
      icon: JSX.Element
      active: boolean
      onPress: () => void
      color?: string
    }
