import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(utc)
dayjs.extend(relativeTime)

const colors = [
  'blue', 'yellow', 'green', 'pink', 'purple', 'teal', 'gray', 'red', 'indigo', 'orange'
]


export const formatDateAgo = (value: number) => {
  return dayjs().to(dayjs.utc(value))
}


export const formatDate = (value: number) => {
  return dayjs.utc(value).format('MMMM DD, YYYY')
}

export const getColorByOrder = (order: number) => {
  return colors[order % colors.length]
}


// Return [firstErrorMessage, { field: errorMessage }]
export const parseResponseErrors = (err: any) => {
  const errors = err.response?.body?.error?.errors
  if (errors) {
    const parsedErrors = Object.entries(errors)
      .map(
        ([k, v]) => ({ [k]: Array.isArray(v) ? v[0] : v })
      )
      .reduce((a, b) => ({...a, ...b}), {})
    const [firstField, firstError] = Object.entries(parsedErrors)[0]
    const firstErrorMessage = `${firstField} ${firstError}`
    return [firstErrorMessage, parsedErrors]
  }
  return [err.response?.body?.error?.message || "Server error", null]
}
