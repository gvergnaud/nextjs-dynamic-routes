import pathMatch from 'path-match'
import React from 'react'
import Link from 'next/link'
import { capitalize, compose } from 'lodash/fp'
import { createLinkProps } from './utils/routing'
import { mapKeys, mapValues } from './utils/object'

const match = pathMatch()

const log = x => (console.log(x), x)

const createMiddleware = routes => app => {

  const getMatchingRoute = req =>
    Object.values(routes).reduce((acc, { pattern, page }) => {
      if (acc.page) return acc

      const params = match(pattern)(req.url)

      if (params) return { page, params }
      else return acc
    }, {})

  return (req, res, next) => {
    const { page, params } = getMatchingRoute(req)

    if (page) app.render(req, res, page, params)
    else next()
  }
}

const createLinks = routes => {
  const links = compose(
    mapKeys(key => `${capitalize(key)}Link`),
    mapValues(mapProps => props =>
      <Link {...mapProps(props)}>{props.children}</Link>
    ),
    mapValues(createLinkProps)
  )(routes)

  return new Proxy(links, {
    get: (_, k) => !!links[k]
      ? links[k]
      : (typeof k !== 'string' || !k.match('Link'))
        ? undefined
        : props => (
          <Link
            href={`/${k.replace('Link', '').toLowerCase()}`}
            {...props} />
        )
  })
}

const createDynamicRoutes = (routesConfig) => {
  const routes = createLinks(routesConfig)
  routes.createMiddleware = createMiddleware(routesConfig)
  return routes
}
export default createDynamicRoutes
