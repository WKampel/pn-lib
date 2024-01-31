import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export type AccordionItemProps = {
  title: string
  body: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const AccordionItem = ({ title, body, isOpen, setIsOpen }: AccordionItemProps) => {
  const tokens = useTheme()

  return (
    <View style={{ gap: tokens.spacing_xs }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: tokens.size_m,
        }}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text
          style={{
            fontSize: tokens.font_size_l,
            color: tokens.color_text_on_surface,
            fontWeight: tokens.weight_semi_heavy,
          }}
        >
          {title}
        </Text>
        <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={tokens.font_size_l} color={tokens.color_text_on_surface} />
      </TouchableOpacity>
      {isOpen && (
        <View>
          <Text
            style={{
              paddingLeft: tokens.spacing_m,
              fontSize: tokens.font_size_s,
              marginBottom: tokens.spacing_m,
            }}
          >
            {body}
          </Text>
        </View>
      )}
    </View>
  )
}
