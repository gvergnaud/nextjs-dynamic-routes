import pathMatch from 'path-match'
import React from 'react'
import Link from 'next/link'
import NextRouter from 'next/router'
import { addInitialSlash, createLinkProps } from './utils/routing'

const match = pathMatch()

export default class Router {

  routes = []

  add = ({ pattern, name, page = addInitialSlash(name) }) => {
    this.routes.push({ pattern, page, name })
  }

  getRoute = name => {
    const route = this.routes.find(r => r.name === name)
    if (!route) throw new Error(`The route ${name} doesn't exist.`)
    return route
  }

  Link = ({ children, route, ...params }) => {
    const { page, pattern } = this.getRoute(name)

    return (
      <Link {...createLinkProps(page, pattern, params)} {...params}>{children}</Link>
    )
  }

  pushRoute = (name, params) => {
    const { page, pattern } = this.getRoute(name)
    const { href, as } = createLinkProps(page, pattern, params)
    return NextRouter.push(href, as)
  }

  getMatchingRoute = (url) => {
    return this.routes.reduce((acc, { page, pattern }) => {
      if (acc.page) return acc
      const params = match(pattern)(url)
      if (params) return { page, params }
      else return acc
    }, {})
  }

  getRequestHandler = (app) => {
    const handle = app.getRequestHandler()

    return (req, res) => {
      const { page, params } = this.getMatchingRoute(req.url)
      if (page) app.render(req, res, page, params)
      else handle(req, res)
    }
  }

  getRoutePath = (routeName, params) => {
    const { pattern } = this.getRoute(name)
    return replaceWithParams(pattern, params)
  }

}
