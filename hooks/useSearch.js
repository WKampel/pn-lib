const useSearch = (rows, searchValue) => {
  return rows.filter(row => {
    const lowerCaseSearchArray = searchValue.toLowerCase().split(' ')
    return lowerCaseSearchArray.every(item => JSON.stringify(row)?.toLowerCase().includes(item))
  })
}

export default useSearch
