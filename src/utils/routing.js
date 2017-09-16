import { toString } from './queryString'
import { mapValues, filterValues } from './object'

export const replaceWithParams = (pattern, params) =>
  Object.keys(params)
    .reduce((acc, param) => acc.replace(`:${param}`, params[param]), pattern)
    .replace(/:[^\/&\?]*(\/|$)/g, '')

export const addInitialSlash = str => !!str.match(/^\//) ? str : `/${str}`

export const createLinkProps = (page = '', pattern = '', params) => {
  const restParams = filterValues((_, key) => !pattern.match(`:${key}`), params)

  return {
    ...restParams,
    href: `${addInitialSlash(page)}?${toString(params)}`,
    as: replaceWithParams(pattern, params),
  }
}
