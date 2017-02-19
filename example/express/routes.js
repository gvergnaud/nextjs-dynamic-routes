const createDynamicRoutes = require('nextjs-dynamic-routes').default

module.exports = createDynamicRoutes({
  '/character': '/characters/:id',
  '/film': '/films/:id',
  '/character-and-film': '/character-and-film/:characterId/:filmId'
})
