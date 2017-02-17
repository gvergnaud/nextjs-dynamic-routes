import { toString } from './queryString'
import { mapValues } from './object'

const replaceWithParams = (params, pattern) =>
  Object.keys(params)
    .reduce((acc, param) => acc.replace(`:${param}`, params[param]), pattern)
    .replace(/:[^\/&\?]*(\/|$)/g, '')

export const createLinkProps = ({ pattern = '', page = '' }) => params => ({
  href: `${page}?${toString(params)}`,
  as: replaceWithParams(params, pattern),
})
