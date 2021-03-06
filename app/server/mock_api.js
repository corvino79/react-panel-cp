let _ = require('lodash')

function question (id) {
  let sampleContent = 'Contenido '
  return {
    id,
    content: `sample-${id}: ${sampleContent} ${id}`,
    user_id: id
  }
}

export const questions = _.range(1, 10).map((i)=> question(i))
export function getUser (id) {
  return {
    id,
    name: `user name - ${id}`
  }
}
export function getQuestion (id) {
  if (id === 'not-found') {
    return null
  }
  return question(id)
}
