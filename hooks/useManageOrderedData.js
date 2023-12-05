import { useEffect } from 'react'
import useMutation from './useMutation'
import useOrderedData from './useOrderedData'
import { usePracticeQuery } from './usePracticeQuery'

const useManageOrderedData = (GET_QUERY, ORDER_MUTATION, getQueryDataKey, refetchQueries) => {
  const { loading, data } = usePracticeQuery(GET_QUERY)

  useEffect(() => {
    if (data?.[getQueryDataKey]) {
      setData(data[getQueryDataKey])
    }
  }, [data])

  const { orderedData, moveUp, moveDown, setData, modified } = useOrderedData(data?.[getQueryDataKey])

  const orderData = useMutation(ORDER_MUTATION, {
    variables: { ids: orderedData?.map(item => item.id) },
    refetchQueries,
  })

  return {
    orderedData,
    moveUp,
    moveDown,
    modified,
    getLoading: loading,
    orderLoading: orderData.loading,
    execOrder: orderData.exec,
  }
}

export default useManageOrderedData
