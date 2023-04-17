import { StyleSheet, Text, View } from 'react-native'
import TextInput from '../../components/textinput'
import Button from '../../button'
import { Feather } from '@expo/vector-icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useContext, useRef } from 'react'
import moment from 'moment'
import { Context as StyleContext } from '../../contexts/style'

export const Conversation = props => {
  const scrollViewRef = useRef()

  const data = props.messages.reverse()

  return (
    <FlatList
      inverted
      data={data}
      style={styles.messages}
      ref={scrollViewRef}
      renderItem={({ item, index }) => <Message key={index} data={item} />}
    />
  )
}
export const ComposeMessage = props => (
  <View style={styles.composeMessageContainer}>
    <TextInput value={props.value} onChangeText={props.onChangeText} autoHeight={true} multiline={true} containerStyle={styles.sendMessageInput} />
    <Button
      disabled={!props.value?.trim().length}
      status={props.status}
      onPress={props.onSubmit}
      style={styles.sendMessageButton}
      icon={<Feather name='send' size={20} color='white' />}
    />
  </View>
)

const Message = props => {
  const style = useContext(StyleContext)
  return (
    <View style={[styles.message, props.data?.fromMe ? styles.myMessage : {}, props.data?.fromMe ? { backgroundColor: style.primaryColor } : {}]}>
      <Text style={[styles.messageText, props.data?.fromMe ? styles.myMessageText : {}]}>{props.data?.body}</Text>
      <Text style={[styles.messageText, styles.messageDate, props.data?.fromMe ? styles.myMessageText : {}]}>
        {moment(props.data?.createdAt).format('ddd, MMM D YYYY, h:mm A')}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  messages: {
    padding: 5,
  },
  composeMessageContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'rgb(240,240,240)',
  },
  sendMessageInput: {
    flex: 2,
  },
  sendMessageButton: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    alignSelf: 'flex-end',
    width: 'auto',
    alignSelf: 'flex-end',
  },
  message: {
    marginRight: 'auto',
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    maxWidth: '75%',
  },
  myMessage: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  messageText: {
    color: 'black',
  },
  myMessageText: {
    color: 'white',
  },
  messageDate: {
    fontSize: 11,
  },
})
