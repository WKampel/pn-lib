import { useCallback, useEffect, useState } from 'react'

function useOrderedData(initialValue, idKey = 'id') {
  const [originalData, setOriginalData] = useState(initialValue || [])
  const [orderedData, setOrderedData] = useState(initialValue || [])
  const [modified, setModified] = useState(false)

  useEffect(() => {
    setModified(JSON.stringify(originalData) !== JSON.stringify(orderedData))
  }, [originalData, orderedData])

  const move = useCallback(
    (index, direction) => {
      setOrderedData(currentData => {
        const newIndex = index + direction
        // Check if the new index is within the array bounds
        if (newIndex < 0 || newIndex >= currentData.length) return currentData

        // Create a new array for immutability
        const updatedData = [...currentData]
        // Swap the elements using destructuring assignment
        ;[updatedData[index], updatedData[newIndex]] = [updatedData[newIndex], updatedData[index]]
        return updatedData
      })
    },
    [setOrderedData]
  )

  const moveUp = useCallback(
    item => {
      const index = orderedData.findIndex(_item => _item[idKey] === item[idKey])
      if (index > 0) {
        move(index, -1)
      }
    },
    [orderedData, idKey, move]
  )

  const moveDown = useCallback(
    item => {
      const index = orderedData.findIndex(_item => _item[idKey] === item[idKey])
      if (index !== -1 && index < orderedData.length - 1) {
        move(index, 1)
      }
    },
    [orderedData, idKey, move]
  )

  const setData = useCallback(
    data => {
      setOriginalData(data)
      setOrderedData(data)
    },
    [setOriginalData, setOrderedData]
  )

  return { orderedData, moveUp, moveDown, setData, modified }
}

export default useOrderedData
