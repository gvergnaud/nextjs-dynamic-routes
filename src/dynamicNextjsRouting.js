import pathMatch from 'path-match'
import React from 'react'
import Link from 'next/link'
import capitalize from 'lodash/fp/capitalize'
import compose from 'lodash/fp/compose'
import { addInitialSlash, createLinkProps } from './utils/routing'
import { mapKeys, mapValues } from './utils/object'

const match = pathMatch()

const createRequestHandler = routes => app => {
  const handle = app.getRequestHandler()
  const getMatchingRoute = url =>
    Object.keys(routes).reduce((acc, page) => {
      if (acc.page) return acc

      const params = match(routes[page])(url)

      if (params) return { page, params }
      else return acc
    }, {})

  return (req, res) => {
    const { page, params } = getMatchingRoute(req.url)
    if (page) app.render(req, res, addInitialSlash(page), params)
    else handle(req, res)
  }
}

const pathToComponentName = path =>
  path
    .replace(/^\//, '')
    .replace(/(^.|-.)/g, c => c.replace('-', '').toUpperCase())

const componentNameToPath = componentName =>
  componentName
    .replace(/^./, c => `/${c.toLowerCase()}`)
    .replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)

const createLinks = routes => {
  const links = compose(
    mapKeys(path => `${pathToComponentName(path)}Link`),
    mapValues(mapProps => ({ children, ...props }) =>
      <Link {...mapProps(props)} {...props}>{children}</Link>
    ),
    mapValues(createLinkProps)
  )(routes)

  return new Proxy(links, {
    get: (_, componentName) => !!links[componentName]
      ? links[componentName]
      : (typeof componentName !== 'string' || !componentName.match('Link'))
        ? undefined
        : componentName === 'IndexLink'
          ? props => <Link href="/" {...props} />
          : props =>
            <Link
              href={`/${componentNameToPath(k.replace('Link', ''))}`}
              {...props} />
  })
}

const createDynamicRoutes = routesConfig => {
  const routes = createLinks(routesConfig)
  routes.createRequestHandler = createRequestHandler(routesConfig)
  return routes
}

export default createDynamicRoutes
