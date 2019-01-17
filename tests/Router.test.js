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
