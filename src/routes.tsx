export default [
  {
    path: '/:id([0-9]+)',
    module: () => import('./containers/Detail'),
  },
]
