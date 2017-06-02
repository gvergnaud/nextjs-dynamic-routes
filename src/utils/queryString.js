export const toString = params =>
  Object
    .entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')

export const fromString = str =>
  str
    .replace(/^\?/, '')
    .split('&')
    .map(str => str.split('='))
    .reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {})
