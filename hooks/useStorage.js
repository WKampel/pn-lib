import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from 'react'
import { Platform } from 'react-native'

const getItem = async key => {
  const value = Platform.OS === 'web' ? await AsyncStorage.getItem(key) : await SecureStore.getItemAsync(key)
  return value
}

const saveItem = async (key, value) => {
  if (Platform.OS === 'web') return await AsyncStorage.setItem(key, '' + value)
  return await SecureStore.setItemAsync(key, '' + value)
}

const useStorage = key => {
  const [item, setItem] = useState(undefined)

  useEffect(() => {
    getItem(key).then(val => {
      setItem(val || null)
    })
  }, [])

  return [
    item,
    val => {
      if (!val) val = ''
      saveItem(key, val)
      setItem(val)
    },
    item === undefined, // Loading
  ]
}

export default useStorage
