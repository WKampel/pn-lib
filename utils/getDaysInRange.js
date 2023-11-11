const getDaysInRange = (start, end) => {
  let arr = []
  let dt = new Date(start)
  for (; dt <= new Date(end); dt.setDate(dt.getDate() + 1)) arr.push(new Date(dt))
  return arr
}

export default getDaysInRange
