export const concat = (q1, q2) => `${q1}&${q2}`

export const toString = params =>
  Object
    .entries(params)
    .reduce((acc, [k, v]) => concat(acc, `${k}=${v}`), '')

export const fromString = str => str
  .replace(/^\?/, '')
  .split('&')
  .map(str => str.split('='))
  .reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {})
