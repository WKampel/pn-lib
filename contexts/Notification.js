import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import uuid from 'react-native-uuid'
import useState from '../hooks/useState'
import { useBranding } from './Branding'

const { createContext, useContext, useEffect } = require('react')

const Context = createContext()

const useNotification = () => useContext(Context)

const Provider = props => {
  const insets = useSafeAreaInsets()

  const notifications = useState([])
  const DEFAULT_LIFESPAN = 15000

  const clearOne = id =>
    notifications.set(array =>
      array.filter(item => {
        if (item.id === id) {
          clearTimeout(item.timeout)
          return false
        }
        return true
      })
    )

  const notify = ({ id = uuid.v4(), title, body, linkTo, onPress, lifeSpan, type = 'info' }) => {
    notifications.set(old => {
      let existingNotification = old.find(notif => notif.id === id)

      // If notification exists, clear the old timeout
      if (existingNotification) {
        clearTimeout(existingNotification.timeout)
      } else {
        // If not, create a new one
        existingNotification = { id }
        old.push(existingNotification)
      }

      // Update the notification
      Object.assign(existingNotification, {
        title,
        body,
        linkTo,
        onPress,
        createdAt: new Date(),
        timeout: setTimeout(() => {
          clearOne(id)
        }, lifeSpan || DEFAULT_LIFESPAN),
        type,
      })

      return [...old]
    })
  }

  const clearAll = () => {
    notifications.set(array =>
      array.filter(item => {
        clearTimeout(item.timeout)
        return false
      })
    )
  }

  return (
    <Context.Provider
      value={{
        notify,
        clearNotifications: clearAll,
        clearNotification: clearOne,
      }}
    >
      {props.children}
      <View style={[styles.container, Platform.OS !== 'web' && { paddingTop: insets.top }]} pointerEvents='box-none'>
        {[...notifications.val].reverse().map(notif => (
          <Notification
            key={notif.id}
            title={notif.title}
            body={notif.body}
            onPress={() => {
              if (notif.onPress) notif.onPress()
              notifications.set(val => val.filter(item => item.id !== notif.id))
            }}
            linkTo={notif.linkTo}
            delete={() => clearOne(notif.id)}
            type={notif.type}
          />
        ))}
      </View>
    </Context.Provider>
  )
}

const Notification = props => {
  const nav = useNavigation()
  const { colors } = useBranding('notification')

  const onPress = () => {
    if (props.onPress) props.onPress()
    if (props.linkTo) nav.navigate(props.linkTo)
  }
  return (
    <Pressable
      style={[
        styles.notification,
        props.type === 'info' && styles.infoNotification,
        props.type === 'warning' && styles.warningNotification,
        props.type === 'error' && styles.errorNotification,
      ]}
      onPress={onPress}
    >
      {props.type === 'info' && <AntDesign name='infocirlceo' size={30} color={colors.primary} />}
      {props.type === 'warning' && <AntDesign name='warning' size={30} color='white' />}
      {props.type === 'error' && <AntDesign name='closecircleo' size={30} color='white' />}

      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.title,
            { color: colors.primary },
            props.type === 'warning' && styles.warningNotificationTitle,
            props.type === 'error' && styles.errorNotificationTitle,
          ]}
        >
          {props.title}
        </Text>
        <Text style={[styles.body, props.type === 'warning' || (props.type === 'error' && { color: 'white' })]}>{props.body}</Text>
      </View>
      <Pressable style={styles.closeButton} onPress={props.delete}>
        <AntDesign name='delete' size={20} color={props.type === 'info' ? 'gray' : 'white'} />
      </Pressable>
    </Pressable>
  )
}

export { Provider, useNotification }

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: Platform.OS === 'web' ? 25 : 0,
  },
  notification: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    maxWidth: 400,
    width: '100%',
    shadowColor: 'black',
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 0.2,
    marginBottom: 15,
    flexDirection: 'row',
    gap: 10,
  },
  errorNotification: {
    backgroundColor: 'rgb(220, 80, 80)',
  },
  warningNotification: {
    backgroundColor: 'rgb(200, 200, 50)',
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    color: 'rgb(150,150,150)',
  },
  warningNotificationTitle: {
    color: 'white',
  },
  errorNotificationTitle: {
    color: 'white',
  },
})
