import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import { useRef } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
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
      style={styles.messages}
      ref={scrollViewRef}
      renderItem={({ item, index }) => <Message key={index} data={item} />}
    />
  )
}

export const ComposeMessage = props => (
  <View style={styles.composeMessageContainer}>
    <TextInput
      textInputStyle={[Platform.OS === 'web' ? { paddingTop: 10, paddingBottom: 10 } : null]}
      placeholder='Message...'
      state={props.state}
      autoHeight={true}
      multiline={true}
      containerStyle={styles.sendMessageInput}
    />
    <Button
      disabled={!props.state?.val?.trim().length}
      loading={props.loading}
      onPress={props.onSubmit}
      style={styles.sendMessageButton}
      icon={<Feather name='send' size={20} color='white' />}
    />
  </View>
)

const Message = props => {
  const branding = useBranding()
  return (
    <View
      style={[
        branding.message.style,
        props.data?.fromMe ? branding.message.mine.style : null,
        props.data?.fromServer ? branding.message.server.style : null,
      ]}
    >
      <Text
        style={[
          branding.message.text.style,
          props.data?.fromMe ? branding.message.mine.text.style : null,
          props.data?.fromServer ? branding.message.server.text.style : null,
        ]}
      >
        {props.data?.body}
      </Text>
      <Text
        style={[
          branding.message.text.style,
          props.data?.fromMe ? branding.message.mine.text.style : null,
          props.data?.fromServer ? branding.message.server.text.style : null,
        ]}
      >
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
  },
})
