import { FlatList } from 'react-native-gesture-handler'
import useStyles from '../hooks/useStyles'
import Message from './Message'

const Conversation = ({ style, messages }) => {
  const styles = useStyles(styleConfig)

  const renderItem = ({ item, i }) => <Message key={i} body={item.body} from={item.from} createdAt={item.createdAt} />

  return <FlatList contentContainerStyle={styles.flatList} data={messages} renderItem={renderItem} inverted />
}

const styleConfig = {
  base: {
    flatList: {
      gap: '$spacing-m',
      padding: '$spacing-m',
    },
  },
}

export default Conversation
