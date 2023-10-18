import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import { useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useBranding } from '../contexts/Branding'
import Button from './Button'
import TextInput from './TextInput'

export const Conversation = props => {
  const scrollViewRef = useRef()

  const data = props.messages.reverse()

  return (
    <FlatList
      inverted
      data={data}
      style={styles.conversation}
      ref={scrollViewRef}
      renderItem={({ item, index }) => <Message key={index} data={item} />}
    />
  )
}

export const ComposeMessage = props => (
  <View style={styles.composeMessageContainer}>
    <TextInput style={{ flex: 1 }} label='Message...' onChange={props.onChange} value={props.value} multiline={true} />
    <Button
      disabled={!props.value?.trim().length}
      loading={props.loading}
      onPress={props.onSubmit}
      style={styles.sendMessageButton}
      icon={<Feather name='send' size={20} color='white' />}
    />
  </View>
)

const Message = props => {
  const { brandingStyles } = useBranding('message')
  return (
    <View style={[brandingStyles.container, styles.message, props.data?.fromMe && styles.myMessage, props.data?.fromServer && styles.serverMessage]}>
      <Text
        style={[
          brandingStyles.text,
          styles.messageText,
          props.data?.fromMe && styles.myMessageText,
          props.data?.fromServer && styles.serverMessageText,
        ]}
      >
        {props.data?.body}
      </Text>
      <Text
        style={[
          brandingStyles.text,
          styles.messageText,
          props.data?.fromMe && styles.myMessageText,
          props.data?.fromServer && styles.serverMessageText,
        ]}
      >
        {moment(props.data?.createdAt).format('ddd, MMM D YYYY, h:mm A')}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conversation: {
    padding: 5,
  },
  composeMessageContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'rgb(240,240,240)',
  },
  sendMessageInput: {
    flex: 1,
  },
  sendMessageButton: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    alignSelf: 'flex-end',
    width: 'auto',
    alignSelf: 'flex-end',
    flex: null,
    marginBottom: 'auto',
  },
  message: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxWidth: '75%',
    marginTop: 10,
  },
  myMessage: {
    backgroundColor: 'rgb(255, 255, 255)',
    alignSelf: 'flex-end',
  },
  serverMessage: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  messageText: {},
  myMessageText: {
    color: 'black',
  },
  serverMessageText: {
    color: 'gray',
    textAlign: 'center',
  },
})
