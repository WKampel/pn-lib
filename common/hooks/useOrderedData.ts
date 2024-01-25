import { useCallback, useEffect, useState } from 'react'
import { areObjectsEqual } from '../../core/utils/areObjectsEqual'

export const useOrderedData = <T extends object>(initialValue: T[] | null, idKey: keyof T) => {
  const [originalData, setOriginalData] = useState<T[]>(initialValue || [])
  const [orderedData, setOrderedData] = useState<T[]>(initialValue || [])
  const [isModified, setIsModified] = useState(false)

  useEffect(() => {
    setOriginalData(initialValue || [])
    setOrderedData(initialValue || [])
  }, [initialValue])

  useEffect(() => {
    setIsModified(!areObjectsEqual(originalData, orderedData))
  }, [originalData, orderedData])

  const move = useCallback((index: number, direction: number) => {
    setOrderedData(currentData => {
      const newIndex = index + direction
      if (newIndex < 0 || newIndex >= currentData.length) return currentData

      const updatedData = [...currentData]
      ;[updatedData[index], updatedData[newIndex]] = [updatedData[newIndex], updatedData[index]]
      return updatedData
    })
  }, [])

  const moveUp = useCallback(
    (item: T) => {
      const index = orderedData.findIndex(_item => _item[idKey] === item[idKey])
      if (index > 0) {
        move(index, -1)
      }
    },
    [orderedData, idKey, move]
  )

  const moveDown = useCallback(
    (item: T) => {
      const index = orderedData.findIndex(_item => _item[idKey] === item[idKey])
      if (index !== -1 && index < orderedData.length - 1) {
        move(index, 1)
      }
    },
    [orderedData, idKey, move]
  )

  const setData = useCallback((data: T[]) => {
    setOriginalData(data)
    setOrderedData(data)
  }, [])

  return { orderedData, moveUp, moveDown, setData, isModified }
}
