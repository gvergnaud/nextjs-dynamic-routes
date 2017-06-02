# Next.js Dynamic Routes

A dynamic routing solution for the awesome [Next.js](https://github.com/zeit/next.js)
framework.

## Why ?

Next.js introduced in it's V2 a programmatic routing API allowing you to serve your
Next app from, for example, an express server:

```js
// yourServer.js
server.get('/user/:id', (req, res) => {
  return app.render(req, res, '/user', req.params)
})
```
```jsx
// ./pages/index.js
<Link href={`/user?id={id}`} as={`/user/${id}`}><a>Visit me!</a></Link>
```

But as the number of pages grows, it's getting a little hard to manage...

## Introducing Dynamic Routes

```
npm install --save nextjs-dynamic-routes
```

### Setup your routes
Create a `routes.js` file and list all your **Dynamic** routes.
You don't have to list your regular routes, as Next.js will handle them as usual.

```js
const Router = require('nextjs-dynamic-routes').default

const router = new Router()

router.add({ name: 'character', pattern: '/characters/:id' }),
router.add({ name: 'film', pattern: '/films/:id' }),

// if the name of your route is different from your component file name:
router.add({
  name: 'characterAndFilm',
  pattern: '/character-and-film/:characterId/:filmId',
  page: 'character-and-film'
}),

module.exports = router

```

### Setup your request handler
```js
const express = require('express')
const next = require('next')
const Router = require('./routes')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const server = express()
const handle = Router.getRequestHandler(app)

app.prepare()
  .then(() => {
    server.get('*', (req, res) => handle(req, res))
    server.listen(3000)
  })
```

### Use your routes
Then Nextjs Dynamic Routes exports a `Link` component. It's just like `next/link`,
but it adds a `route` prop that let you refer to a route by its name.

```jsx
// pages/index.js
import React from 'react'
import { Link } from '../routes'

export default () => (
  <ul>
    <li><Link route="character" id="1"><a>Luke Skywalker</a></Link></li>
    <li><Link route="character" id="2"><a>C-3PO</a></Link></li>
    <li><Link route="film" id="1"><a>A New Hope</a></Link></li>
    <li><Link route="film" id="2"><a>The Empire Strikes Back</a></Link></li>
    <li>
      <Link route="characterAndFilm" characterId="1" filmId="2">
        <a>The Empire Strikes Back and Luke Skywalker</a>
      </Link>
    </li>
  </ul>
)
```

## Prefetching data
Next.js has this great feature allowing you to prefetch data for your next routes
in the background.

You can benefit of that by simply putting a `prefetch` property on any Link :

```jsx
<Link prefetch route="film" id="2"><a>The Empire Strikes Back</a></Link>
```

## Imperative API

### Router.pushRoute(name, params)
```jsx
<button onClick={() => Router.pushRoute('film', { id: 2 })}>
  Go to film 2
</button>
```
