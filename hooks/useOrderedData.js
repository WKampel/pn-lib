import { useEffect, useState } from 'react'

function useOrderedData(initialData, loading, idKey = 'id') {
  const [orderedData, setOrderedData] = useState(initialData)

  useEffect(() => {
    if (!loading && initialData) {
      setOrderedData(initialData)
    }
  }, [loading, initialData])

  const moveUp = item => {
    const index = orderedData.findIndex(_item => _item[idKey] === item[idKey])
    if (index === -1) return
    if (index > 0) {
      const updatedData = [...orderedData]
      const temp = updatedData[index - 1]
      updatedData[index - 1] = updatedData[index]
      updatedData[index] = temp
      setOrderedData(updatedData)
    }
  }

  const moveDown = item => {
    const index = orderedData.findIndex(_item => _item[idKey] === item[idKey])
    if (index === -1) return
    if (index < orderedData.length - 1) {
      const updatedData = [...orderedData]
      const temp = updatedData[index + 1]
      updatedData[index + 1] = updatedData[index]
      updatedData[index] = temp
      setOrderedData(updatedData)
    }
  }

  const resetOrder = newData => {
    setOrderedData(newData)
  }

  return { orderedData, moveUp, moveDown, resetOrder }
}

export default useOrderedData
