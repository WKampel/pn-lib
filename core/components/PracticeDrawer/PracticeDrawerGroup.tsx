import { Ionicons } from '@expo/vector-icons'
import { ReactNode, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../../common/hooks/useTheme'
import { PracticeDrawerItemType } from '../../types/PracticeDrawerItemType'

const isDescendentActive = (groupItems: PracticeDrawerItemType[]) => {
  for (let item of groupItems) {
    if (item.type === 'item' && item.active) {
      return true
    }
    if (item.type === 'group' && isDescendentActive(item.items)) {
      return true
    }
  }
  return false
}

type PracticeDrawerGroupProps = {
  children: ReactNode
  label: string
  currentRouteName?: string
  items: PracticeDrawerItemType[]
}

export const PracticeDrawerGroup = ({ children, label, currentRouteName, items }: PracticeDrawerGroupProps) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // if (!currentRouteName) return
    if (isDescendentActive(items)) {
      setOpen(true)
    }
  }, [currentRouteName])

  const { tokens } = useTheme()

  return (
    <View
      style={{
        backgroundColor: tokens.color_bg_surface_alt,
        borderRadius: 10,
        paddingLeft: 15,
        height: open ? 'auto' : 40,
        overflow: 'hidden',
      }}
    >
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        style={{
          height: tokens.size_m,
          paddingRight: tokens.spacing_m,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontWeight: tokens.weight_heavy,
          }}
        >
          {label}
        </Text>
        <Ionicons name={open ? 'chevron-down' : 'chevron-up'} size={20} />
      </TouchableOpacity>
      {children}
    </View>
  )
}
