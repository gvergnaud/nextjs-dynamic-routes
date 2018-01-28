import pathToRegexp from 'path-to-regexp'
import { toString } from './queryString'
import { mapValues } from './object'

export const replaceWithParams = (pattern, params) => {
  return pathToRegexp.compile(pattern)(params)
}

export const addInitialSlash = str => (!!str.match(/^\//) ? str : `/${str}`)

export const createLinkProps = (page = '', pattern = '', params) => {
  const keys = []
  const re = pathToRegexp(pattern, keys)
  const [pathParams, restParams] = Object.entries(params).reduce(
    ([left, right], [key, value]) =>
      keys.map(k => k.name).includes(key)
        ? [{ ...left, [key]: value }, right]
        : [left, { ...right, [key]: value }],
    [{}, {}]
  )

  return {
    ...restParams,
    href: `${addInitialSlash(page)}?${toString(params)}`,
    as: replaceWithParams(pattern, pathParams)
  }
}
