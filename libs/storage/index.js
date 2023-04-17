import { Platform } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getItem = async key => {
  const value = Platform.OS === 'web' ? await AsyncStorage.getItem(key) : await SecureStore.getItemAsync(key)
  return value
}

const saveItem = async (key, value) => {
  if (Platform.OS === 'web') return await AsyncStorage.setItem(key, '' + value)
  return await SecureStore.setItemAsync(key, '' + value)
}

export { getItem, saveItem }
