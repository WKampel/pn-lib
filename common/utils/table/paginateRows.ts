export const paginateRows = <TRow>(rows: TRow[], page: number, perPage: number) => {
  const pageCount = Math.ceil(rows.length / perPage) || 0
  const slicedRows = rows.slice(page * perPage, (page + 1) * perPage)

  return { pageCount, slicedRows }
}
