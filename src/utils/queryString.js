export const toString = (params, prefix = '?') => {
  const queryString = Object
    .entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')

  return queryString ? prefix + queryString : ''
}
