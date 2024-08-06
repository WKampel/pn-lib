export type PracticeDrawerItemType =
  | {
      type: 'group'
      label: string
      items: PracticeDrawerItemType[]
    }
  | {
      type: 'item'
      label: string | JSX.Element
      icon: JSX.Element
      active: boolean
      onPress: () => void
      color?: string
    }
