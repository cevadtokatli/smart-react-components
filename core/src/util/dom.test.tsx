import { debounce } from './dom'

describe('dom', () => {
  it('debounce should prevent callback from called multiple times', () => {
    const callback = jest.fn()
    const debounceCallback = debounce(callback)

    debounceCallback()
    debounceCallback()

    setTimeout(() => {
      expect(callback).toHaveBeenCalledTimes(1)
    }, 250)
  })
})
