export function postId (link) {
  return link.split('/').filter(item => item.length).pop()
}
