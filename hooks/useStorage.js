import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store'
import { useEffect } from 'react'
import { Platform } from 'react-native'
import useState from './useState'

const getItem = async key => {
  const value = Platform.OS === 'web' ? await AsyncStorage.getItem(key) : await SecureStore.getItemAsync(key)
  return value
}

const saveItem = async (key, value) => {
  if (Platform.OS === 'web') return await AsyncStorage.setItem(key, '' + value)
  return await SecureStore.setItemAsync(key, '' + value)
}

const useStorage = key => {
  const item = useState(undefined)

  useEffect(() => {
    getItem(key).then(val => {
      item.set(val || null)
    })
  }, [])

  return {
    val: item.val,
    set: val => {
      if (!val) val = ''
      saveItem(key, val)
      item.set(val)
    },
  }
}

export default useStorage
