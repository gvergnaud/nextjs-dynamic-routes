const pathMatch = require('path-match')
const React = require('react')
const Link = require('next/link').default
const NextRouter = require('next/router').default
const { parseUrl } = require('./utils/queryString')
const { addInitialSlash, createLinkProps, replaceWithParams } = require('./utils/routing')

const match = pathMatch()

class Router {

  routes = []

  events = NextRouter.events

  add = ({ pattern, name, page = addInitialSlash(name) }) => {
    this.routes.push({ pattern, page, name })
    return this
  }

  getRoute = name => {
    const route = this.routes.find(r => r.name === name)
    if (!route) throw new Error(`The route ${name} doesn't exist.`)
    return route
  }

  Link = ({ children, route: name, ...params }) => {
    const { page, pattern } = this.getRoute(name)

    return (
      <Link {...createLinkProps(page, pattern, params)}>{children}</Link>
    )
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

  getMatchingRoute = (url) => {
    return this.routes.reduce((acc, { page, pattern }) => {
      if (acc.page) return acc
      const { pathname, queryParams } = parseUrl(url)
      const params = match(pattern)(pathname)
      if (params) return { page, params: { ...params, ...queryParams } }
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
    const { pattern } = this.getRoute(routeName)
    return replaceWithParams(pattern, params)
  }

}

module.exports = Router
