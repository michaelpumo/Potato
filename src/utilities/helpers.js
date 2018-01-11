import { format } from 'date-fns'

export function postId (link) {
  return link.trim().split('/').filter(item => item.length).pop()
}

export function postPublished (date) {
  const published = new Date(date)
  return format(new Date(published), '[Published:] Do MMM YYYY [at] HH:mm')
}

export function postAuthor (author) {
  author.trim()
  return (/"/.test(author)) ? author.match(/"(.*?)"/)[1] : author
}
