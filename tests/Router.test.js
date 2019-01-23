import Router from '../src/Router'

test('getMatchingRoute should should decode query params', () => {
  const router = new Router()
  router.add({ name: 'test', pattern: '/' })
  // When typing `?test=ä` into the browser address bar, express receives it
  // with the 'ä' URL encoded. When parsed, it should be decoded again.
  expect(router.getMatchingRoute(`/?test=${encodeURIComponent('ä')}`)).toEqual({
    page: '/test',
    params: { test: 'ä' },
  })
})

test('getMatchingRoute should give precedence to inline params', () => {
  const router = new Router()
  router.add({ name: 'film', pattern: '/films/:id' })
  expect(router.getMatchingRoute('/films/2?utm_campaign=website&id=1')).toEqual({
    page: '/film',
    params: { id: '2', utm_campaign: 'website' },
  })
})
