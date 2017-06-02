import { toString } from './queryString'
import { mapValues } from './object'

const replaceWithParams = (params, pattern) =>
  Object.keys(params)
    .reduce((acc, param) => acc.replace(`:${param}`, params[param]), pattern)
    .replace(/:[^\/&\?]*(\/|$)/g, '')

export const addInitialSlash = str => !!str.match(/^\//) ? str : `/${str}`

export const createLinkProps = (page = '', pattern = '', params) => ({
  href: `${addInitialSlash(page)}?${toString(params)}`,
  as: replaceWithParams(params, pattern),
})
