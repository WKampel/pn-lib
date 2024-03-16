import moment from 'moment'
import { Text, View } from 'react-native'
import { useTheme } from '../../common/hooks/useTheme'
import { MessageFrom } from '../types/MessageFrom'

type MessageProps = {
  body: string
  createdAt: Date
  from: MessageFrom
}

export const Message = ({ body, createdAt, from }: MessageProps) => {
  if (from === 'SERVER') return <ServerMessage body={body} createdAt={createdAt} />
  if (from === 'ME') return <MyMessage body={body} createdAt={createdAt} />
  if (from === 'PENPAL') return <PenpalMessage body={body} createdAt={createdAt} />
}

const BaseMessage = ({ body, createdAt, styles }: { body: string; createdAt: Date; styles: { message: {}; text: {} } }) => {
  const { tokens } = useTheme()

  return (
    <View
      style={{
        borderRadius: tokens.radius_m,
        maxWidth: '75%',
        paddingHorizontal: tokens.spacing_m,
        paddingVertical: tokens.spacing_s,
        ...styles.message,
      }}
    >
      <Text
        style={{
          fontSize: tokens.font_size_s,
          ...styles.text,
        }}
      >
        {body}
      </Text>

      <Text
        style={{
          fontSize: tokens.font_size_s,
          ...styles.text,
        }}
      >
        {moment(createdAt).format('ddd, MMM D YYYY, h:mm A')}
      </Text>
    </View>
  )
}

const MyMessage = ({ body, createdAt }: { body: string; createdAt: Date }) => {
  const { tokens } = useTheme()
  return (
    <BaseMessage
      body={body}
      createdAt={createdAt}
      styles={{
        message: {
          backgroundColor: tokens.color_bg_surface_emphasis,
          marginLeft: 'auto',
        },
        text: {
          color: tokens.color_text_on_surface,
        },
      }}
    />
  )
}

const ServerMessage = ({ body, createdAt }: { body: string; createdAt: Date }) => {
  const { tokens } = useTheme()
  return (
    <BaseMessage
      body={body}
      createdAt={createdAt}
      styles={{
        message: {
          backgroundColor: 'transparent',
          alignSelf: 'center',
        },
        text: {
          color: tokens.color_text_on_surface,
          textAlign: 'center',
        },
      }}
    />
  )
}

const PenpalMessage = ({ body, createdAt }: { body: string; createdAt: Date }) => {
  const { tokens } = useTheme()
  return (
    <BaseMessage
      body={body}
      createdAt={createdAt}
      styles={{
        message: {
          backgroundColor: tokens.color_ui_primary,
          marginRight: 'auto',
        },
        text: {
          color: tokens.color_text_on_primary,
        },
      }}
    />
  )
}
