import format from 'date-fns/format'

export function postId (link) {
  return link.trim().split('/').filter(item => item.trim().length).pop()
}

export function postPublished (date) {
  const published = new Date(date)
  return format(new Date(published), '[Published:] Do MMM YYYY [at] HH:mm')
}

export function postAuthor (author) {
  author.trim()
  return (/"/.test(author)) ? author.match(/"(.*?)"/)[1] : author
}

export function postTags (tags) {
  return tags.split(' ').filter(item => item.trim().length)
}

export function postDescription (html) {
  const description = html.split('</p>')
                          .filter(item => item.trim().length)
                          .map(item => `${item}</p>`.trim())
                          .splice(2)
                          .join('')

  return description
}
