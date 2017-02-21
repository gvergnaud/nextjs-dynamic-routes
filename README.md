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
// /index.js
<Link href={`/user?id={id}`} as={`/user/${id}`}><a>Visit me!</a></Link>
```

But as the number of pages grows, it's getting a little hard to manage...

## Introducing Dynamic Routes

```
npm install --save nextjs-dynamic-routes
```

### Setup you routes
Create a `routes.js` file and list all your **Dynamic** routes.
You don't have to list your regular routes, as Next.js will handle them as usual.

```js
const createDynamicRoutes = require('nextjs-dynamic-routes').default

module.exports = createDynamicRoutes({
  '/character': '/characters/:id',
  '/film': '/films/:id',
  '/character-and-film': '/character-and-film/:characterId/:filmId'
  // works for any number of params
})
```

### Setup your request handler
```js
const express = require('express')
const next = require('next')
const { createRequestHandler } = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = express()
const handle = createRequestHandler(app)

app.prepare()
  .then(() => {
    server.get('*', (req, res) => handle(req, res))
    server.listen(3000)
  })
```

### Use your routes
Then Nextjs Dynamic Routes will generate for you every Link components you will
need! you just have to import them like this:

```jsx
// pages/index.js
import React from 'react'
import { CharacterLink, FilmLink, CharacterAndFilmLink } from '../routes'

export default () => (
  <ul>
    <li><CharacterLink id="1"><a>Luke Skywalker</a></CharacterLink></li>
    <li><CharacterLink id="2"><a>C-3PO</a></CharacterLink></li>
    <li><FilmLink id="1"><a>A New Hope</a></FilmLink></li>
    <li><FilmLink id="2"><a>The Empire Strikes Back</a></FilmLink></li>
    <li>
      <CharacterAndFilmLink characterId="1" filmId="2">
        <a>The Empire Strikes Back and Luke Skywalker</a>
      </CharacterAndFilmLink>
    </li>
  </ul>
)
```

## Prefetching data
Next.js has this great feature allowing you to prefetch data for you next routes
in the background.

You can benefit of that by simply putting a `prefetch` property on any Link :

```jsx
<FilmLink prefetch id="2"><a>The Empire Strikes Back</a></FilmLink>
```

## It works for static routes too!

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
