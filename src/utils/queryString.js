export const toString = (params, prefix = '?') => {
  const queryString = Object
    .entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')

  return queryString ? prefix + queryString : ''
}
