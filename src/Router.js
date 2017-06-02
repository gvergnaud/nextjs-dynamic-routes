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

  Link = ({ children, route, ...params }) => {
    const { page, pattern } = this.routes.find(r => r.name === route)

    return (
      <Link {...createLinkProps(page, pattern, params)} {...params}>{children}</Link>
    )
  }

  pushRoute = (name, params) => {
    const { page, pattern } = this.routes.find(r => r.name === name)
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

  createRequestHandler = (app) => {
    const handle = app.getRequestHandler()

    return (req, res) => {
      const { page, params } = this.getMatchingRoute(req.url)
      if (page) app.render(req, res, page, params)
      else handle(req, res)
    }
  }

}
