# Next.js Dynamic Routes (WIP)

A dynamic routing solution for the [Next.js](https://github.com/zeit/next.js)
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
// /index.js
<Link href={`/user?id={id}`} as={`/user/${id}`}><a>Visit me!</a></Link>
```

But as the number of pages grows, it's getting a little hard to manage...

## Introducing Dynamic Routes

```
npm install --save nextjs-dynamic-routes
```

First create a `routes.js` file and list all your **Dynamic** routes.
You don't have to list your regular routes, as Next.js will handle them as usual.

```js
import createDynamicRoutes from 'nextjs-dynamic-routes'

export default createDynamicRoutes({
  '/user': '/user/:id',
  '/film': '/film/:id'
})
```

Add the middleware to your express server:
```js
import express from 'express'
import next from 'next'
import dynamicRoutes from './routes'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = express()

app.prepare()
  .then(() => {
    server.use(dynamicRoutes.createMiddleware(app))
    server.listen(3000)
  })
```

Then Nextjs Dynamic Routes will generate for you every Link components you will
need! you just have to import them like this:

```jsx
// pages/index.js
import { UserLink, FilmLink } from '../routes'

export default () => (
  <div>
    <h1>Users</h1>
    <nav>
      <UserLink id="1"><a>Luke Skywalker</a></UserLink>
      <UserLink id="2"><a>C-3PO</a></UserLink>
    </nav>

    <h1>Films</h1>
    <nav>
      <FilmLink id="1"><a>A New Hope</a></FilmLink>
      <FilmLink id="2"><a>The Empire Strikes Back</a></FilmLink>
    </nav>
  </div>
)
```

### Prefetching data
Next.js has this great feature allowing you to prefetch data for you next routes
in the background.

You can benefit of that by simply putting a `prefetch` property on any Link :

```jsx
<FilmLink prefetch id="2"><a>The Empire Strikes Back</a></FilmLink>
```

### It works for static routes too!

You can even import `Link` components that you didn't declare in your `routes.js`
config file! It's using an es6 `Proxy` under the hood to auto-fill the `href` property
based on the name of the `Link` component you imported.

for exemple if you do:
```js
// pages/index.js
import { AboutLink } from '../routes'
```
what you will actually get is:
```jsx
props => <Link href="/about" {...props} />
```
Pretty cool huh?
