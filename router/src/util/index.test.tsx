import { generateMatch, generateURL } from './'

describe('util', () => {
  it('should generate match object', () => {
    expect(generateMatch('/home/5', '/home/:id(\\d+)', false)).toEqual({
      isExact: true,
      params: {
        id: '5',
      },
      path: '/home/:id(\\d+)',
      url: '/home/5',
    })

    expect(generateMatch('/home/5', '/home', false)).toEqual({
      isExact: false,
      params: {},
      path: '/home',
      url: '/home/5',
    })

    expect(generateMatch('/home/5', '/home', true)).toEqual(null)
  })

  it('should generate URL', () => {
    expect(generateURL('/')).toEqual({
      fullpath: '/',
      params: [],
      pathname: '/',
      search: '',
      query: {},
    })

    expect(generateURL('/items/1?sort=name&by=desc#name')).toEqual({
      fullpath: '/items/1?sort=name&by=desc#name',
      params: ['items', '1'],
      pathname: '/items/1',
      search: 'sort=name&by=desc',
      query: {
        sort: 'name',
        by: 'desc',
      },
    })
  })
})
