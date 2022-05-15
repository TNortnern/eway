// export function extractVuelidateError({ $v,  }) {
//     return v$?.password?.$errors?.[0]?.$message
// }

export function defaultDateTimeValue() {
  const now = new Date()
  const offset = now.getTimezoneOffset() * 60000
  const adjustedDate = new Date(now.getTime() - offset)
  adjustedDate.setHours(adjustedDate.getHours() + 1)
  const formattedDate = adjustedDate.toISOString().substring(0, 16) // For minute precision
  return formattedDate
}
