import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from 'react'
import { Platform } from 'react-native'

const getItem = async (key: string): Promise<string | null> => {
  const value = Platform.OS === 'web' ? await AsyncStorage.getItem(key) : await SecureStore.getItemAsync(key)
  return value
}

const saveItem = async (key: string, value: string): Promise<void> => {
  if (Platform.OS === 'web') return await AsyncStorage.setItem(key, value)
  return await SecureStore.setItemAsync(key, value)
}

export const useStorage = (key: string): [string | null, (val: string | null) => void, boolean] => {
  const [item, setItem] = useState<string | null>(null)

  useEffect(() => {
    getItem(key).then(val => {
      setItem(val || null)
    })
  }, [key])

  return [
    item,
    (val: string | null) => {
      if (!val) val = ''
      saveItem(key, val)
      setItem(val)
    },
    item === undefined, // Loading
  ]
}
