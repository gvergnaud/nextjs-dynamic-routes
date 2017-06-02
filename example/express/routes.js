const Router = require('nextjs-dynamic-routes').default

const router = new Router()

router.add({
  name: 'index',
  pattern: '/'
}),

router.add({
  name: 'character',
  pattern: '/characters/:id'
}),

router.add({
  name: 'film',
  pattern: '/films/:id'
}),

router.add({
  name: 'character-and-film',
  pattern: '/character-and-film/:characterId/:filmId'
}),


module.exports = router
