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
