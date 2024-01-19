import { FlatList, ListRenderItem } from 'react-native'
import { MessageSentBy } from '../../../gql/graphql'
import { useTheme } from '../../common/hooks/useTheme'
import { useAppConfig } from '../../core/hooks/useAppConfig'
import { determineMessageFrom } from '../utils/determineMessageFrom'
import { Message } from './Message'

type ConversationProps = {
  messages: MessageData[]
}

type MessageData = {
  id: string
  body: string
  sentBy: MessageSentBy
  createdAt: Date
}

export const Conversation = ({ messages }: ConversationProps) => {
  const tokens = useTheme()
  const appConfig = useAppConfig()

  const renderItem: ListRenderItem<MessageData> = ({ item, index }) => (
    <Message key={index} body={item.body} from={determineMessageFrom(item.sentBy, appConfig.app)} createdAt={item.createdAt} />
  )

  return (
    <FlatList
      contentContainerStyle={{
        gap: tokens.spacing_m,
        padding: tokens.spacing_m,
      }}
      data={messages}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      inverted
    />
  )
}
