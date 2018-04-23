import { toString } from './queryString'
import { filterValues } from './object'
import { flatMap } from './array'

const paramRegExp = /(:[^\/&\?]*\??)(\/|$)/g

const escapeRegExp = str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')

export const replaceWithParams = (pattern, params) =>
    Object.keys(params)
      .reduce(
        (acc, param) =>
          acc.replace(new RegExp(`:${escapeRegExp(param)}\\??(?=(\\/|$|\\?))`), params[param]),
        pattern
      )
      .replace(paramRegExp, '')

export const addInitialSlash = str => !!str.match(/^\//) ? str : `/${str}`

export const createLinkProps = (page = '', pattern = '', params) => {
  const restParams = filterValues((_, key) => !pattern.match(`:${key}`), params)

  return {
    ...restParams,
    href: `${addInitialSlash(page)}?${toString(params)}`,
    as: replaceWithParams(pattern, params),
  }
}
