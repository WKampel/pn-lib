import { Feather } from '@expo/vector-icons'
import { View } from 'react-native'
import { TextArea } from '../../common/components/TextArea'
import { SolidButton } from '../../common/components/buttons/SolidButton'
import { useTheme } from '../../common/hooks/useTheme'

type ComposeMessageProp = {
  onChange: (text: string) => void
  value: string
  onSubmit: () => void
  loading?: boolean
}

export const ComposeMessage = ({ onChange, value, onSubmit, loading }: ComposeMessageProp) => {
  const tokens = useTheme()
  return (
    <View style={{ flexDirection: 'row', gap: tokens.spacing_m }}>
      <TextArea containerStyle={{ flex: 1 }} label='Message...' onChange={onChange} value={value} />
      <SolidButton disabled={!value?.trim().length} loading={loading} onPress={onSubmit} icon={<Feather name='send' />} />
    </View>
  )
}
