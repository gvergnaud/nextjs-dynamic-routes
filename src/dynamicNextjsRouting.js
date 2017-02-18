import pathMatch from 'path-match'
import React from 'react'
import Link from 'next/link'
import PrefetchLink from 'next/prefetch'
import capitalize from 'lodash/fp/capitalize'
import compose from 'lodash/fp/compose'
import { addInitialSlash, createLinkProps } from './utils/routing'
import { mapKeys, mapValues } from './utils/object'

const match = pathMatch()

const createMiddleware = routes => app => {
  const handle = app.getRequestHandler()
  const getMatchingRoute = url =>
    Object.keys(routes).reduce((acc, page) => {
      if (acc.page) return acc

      const params = match(routes[page])(url)

      if (params) return { page, params }
      else return acc
    }, {})

  return (req, res, next) => {
    const { page, params } = getMatchingRoute(req.url)
    if (page) app.render(req, res, addInitialSlash(page), params)
    else handle(req, res)
  }
}

const createLinks = routes => {
  const links = compose(
    mapKeys(key => `${capitalize(key.replace(/^\//, ''))}Link`),
    mapValues(mapProps => props =>
      props.prefetch
        ? <PrefetchLink {...mapProps(props)} {...props}>{props.children}</PrefetchLink>
        : <Link {...mapProps(props)} {...props}>{props.children}</Link>
    ),
    mapValues(createLinkProps)
  )(routes)

  return new Proxy(links, {
    get: (_, k) => !!links[k]
      ? links[k]
      : (typeof k !== 'string' || !k.match('Link'))
        ? undefined
        : props =>
          props.prefetch
            ? <PrefetchLink
                href={`/${k.replace('Link', '').toLowerCase()}`}
                {...props} />
            : <Link
                href={`/${k.replace('Link', '').toLowerCase()}`}
                {...props} />
  })
}

const createDynamicRoutes = (routesConfig) => {
  const routes = createLinks(routesConfig)
  routes.createMiddleware = createMiddleware(routesConfig)
  return routes
}
export default createDynamicRoutes
