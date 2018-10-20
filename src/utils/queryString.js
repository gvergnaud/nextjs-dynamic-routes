export const toString = (params, prefix = '?') => {
  const queryString = Object
    .entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')

  return queryString ? prefix + queryString : ''
}

export const fromString = str =>
  str
    .replace(/^\?/, '')
    .split('&')
    .map(str => str.split('='))
    .filter(([k]) => !!k)
    .reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {})

export const parseUrl = url => {
    const [pathname, search = ''] = url.split('?')
    return {
        pathname,
        queryParams: fromString(search)
    }
}
