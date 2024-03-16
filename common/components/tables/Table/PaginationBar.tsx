import React from 'react'
import { ScrollView, Text, TextStyle, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../../hooks/useTheme'

export const PaginationBar = ({ pageCount, page, onPressPage }: { pageCount: number; page: number; onPressPage: (i: number) => void }) => {
  const { tokens } = useTheme()
  if (pageCount <= 1) return null

  return (
    <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: tokens.radius_xs, borderColor: tokens.color_border_on_surface }}>
      <ScrollView horizontal>
        {[...Array(pageCount)].map((_, i) => (
          <PageButton key={i} index={i} isActive={i === page} onPress={() => onPressPage(i)} />
        ))}
      </ScrollView>
    </View>
  )
}

const PageButton = ({ index, isActive, onPress }: { index: number; isActive: boolean; onPress: () => void }) => {
  const { tokens } = useTheme()
  const textStyle: TextStyle = isActive ? { fontWeight: 'bold' } : {}
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: tokens.spacing_xs,
        height: tokens.size_s,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      <Text style={textStyle}>{index + 1}</Text>
    </TouchableOpacity>
  )
}
