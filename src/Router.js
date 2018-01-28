import pathMatch from 'path-match'
import React from 'react'
import Link from 'next/link'
import NextRouter from 'next/router'
import { addInitialSlash, createLinkProps, replaceWithParams } from './utils/routing'

const match = pathMatch()

class Router {
  routes = []

  add = ({ pattern, name, page = addInitialSlash(name) }) => {
    this.routes.push({ pattern, page, name })
  }

  getRoute = name => {
    const route = this.routes.find(r => r.name === name)
    if (!route) throw new Error(`The route ${name} doesn't exist.`)
    return route
  }

  Link = ({ children, route: name, ...params }) => {
    const { page, pattern } = this.getRoute(name)

    return <Link {...createLinkProps(page, pattern, params)}>{children}</Link>
  }

  pushRoute = (name, params = {}, options) => {
    const { page, pattern } = this.getRoute(name)
    const { href, as } = createLinkProps(page, pattern, params)
    return NextRouter.push(href, as, options)
  }

  replaceRoute = (name, params = {}, options) => {
    const { page, pattern } = this.getRoute(name)
    const { href, as } = createLinkProps(page, pattern, params)
    return NextRouter.replace(href, as, options)
  }

  prefetchRoute = (name, params = {}) => {
    const { page, pattern } = this.getRoute(name)
    const { href } = createLinkProps(page, pattern, params)
    return NextRouter.prefetch(href)
  }

  getMatchingRoute = url => {
    return this.routes.reduce((acc, { page, pattern }) => {
      if (acc.page) return acc
      const params = match(pattern)(url)
      if (params) return { page, params }
      else return acc
    }, {})
  }

  getRequestHandler = app => {
    const handle = app.getRequestHandler()

    return (req, res) => {
      const { page, params } = this.getMatchingRoute(req.url)
      if (page) app.render(req, res, page, params)
      else handle(req, res)
    }
  }

  getRoutePath = (routeName, params) => {
    const { pattern } = this.getRoute(routeName)
    return replaceWithParams(pattern, params)
  }
}

module.exports = Router
