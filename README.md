# Next.js Dynamic Routes (WIP)

A dynamic routing solution for the [Next.js](https://github.com/zeit/next.js)
framework.

## Why ?

Next.js introduced in it's V2 a programatic routing API allowing you to serve your
Next app from, for example, an express server:

```js
// yourServer.js
server.get('/a', (req, res) => {
  return app.render(req, res, '/b', req.query)
})
```
```jsx
// /index.js
<Link href="/a" as="/b"><a>Visit me!</a></Link>
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
  user: {
    pattern: '/user/:id',
    page: '/user'
  },
  film: {
    pattern: '/film/:id',
    page: '/film'
  }
})
```

Add the middleware to your express server:
```js
expressServer.use(dynamicRoutes.createMiddleware(nextApp))
```

Then Nextjs Dynamic Routes will generate for you every Link components you will
need! you just have to import them like this:

```js
import { UserLink, FilmLink } from 'nextjs-dynamic-routes'

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

### Even cooler

You can even import `Link` components that you didn't declare in your `routes.js`
config file! It's using an es6 Proxy for that and auto fill the `href` property
based on the name of the `Link` component you imported.

for exemple if you do:
```js
import { AboutLink } from 'nextjs-dynamic-routes'
```
what you will actually get is:
```js
props => <Link href="/about" {...props} />
```
Pretty cool huh?
