import urlLib from 'url'
import { createLinkProps, replaceWithParams } from '../../src/utils/routing'

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

test('createLinkProps support queryParams', () => {
  expect(
    createLinkProps(
      'company',
      '/company/:slug/:view?', {
      slug: 'google',
      queryParams: {
        some: 'param',
        someother: 'param2'
      }
    })
  ).toEqual({
    href: '/company?some=param&someother=param2&slug=google',
    as: '/company/google/?some=param&someother=param2'
  })

  expect(
    createLinkProps(
      'company',
      '/company/:slug/:view?', {
      slug: 'google',
      view: 'home',
      queryParams: {
        some: 'param',
        someother: 'param2'
      }
    })
  ).toEqual({
    href: '/company?some=param&someother=param2&slug=google&view=home',
    as: '/company/google/home?some=param&someother=param2'
  })
})

test('createLinkProps encodes queryParams', () => {
  const props = createLinkProps(
    'test',
    '/', {
    queryParams: {
      'a=b&c': 'd=e&f g',
    }
  })
  const url = urlLib.parse(props.as, true)
  expect(url.query).toEqual({
    'a=b&c': 'd=e&f g',
  })
})
