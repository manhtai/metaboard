import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(utc)
dayjs.extend(relativeTime)


export const formatDateAgo = (value: number) => {
  return dayjs().to(dayjs.utc(value))
}


export const formatDate = (value: number) => {
  return dayjs.utc(value).format('MMMM DD, YYYY')
}
