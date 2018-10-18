import { replaceWithParams } from '../../src/utils/routing'

test('replaceWithParams should parse single params', () => {
  expect(replaceWithParams('/users/:id', { id: 2 })).toBe(`/users/2`)
})

test('replaceWithParams should parse several params', () => {
  expect(replaceWithParams('/users/:id/friends/:friendId', { id: 2, friendId: 7 })).toBe('/users/2/friends/7')
})

test('replaceWithParams should work with query params', () => {
  expect(replaceWithParams('/users/:id?query=param', { id: 2 })).toBe('/users/2?query=param')
})

test('replaceWithParams should support optional params', () => {
  expect(replaceWithParams('/company/:slug/:view?', { slug: 'google' })).toBe('/company/google/')
  expect(replaceWithParams('/company/:slug?/:view', { slug: 'google' })).toBe('/company/google/')
  expect(replaceWithParams('/company/:slug?/:view', { view: 'test' })).toBe('/company/test')
})

test('replaceWithParams should add unused options as query params', () => {
  expect(
    replaceWithParams('/company/:slug/:view?', {
      slug: 'google',
      some: 'param',
      someother: 'param2'
    })
  ).toBe('/company/google/?some=param&someother=param2')
})
