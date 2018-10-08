import ACTIONS from './actions'
import reducer from './reducer'

describe('reducer', () => {
  it('always returns a state', () => {
    const state = {
      articles: [{ source: 'bar' }],
    }

    expect(reducer(state, { source: 'foo' })).toBe(state)
    expect(reducer(state, {})).toBe(state)
    expect(reducer(state)).toBe(state)
  })

  describe(ACTIONS.REPLACE_ARTICLES, () => {
    it('loads all articles from server', () => {
      const state = {
        articles: [],
      }
      const action = {
        type: ACTIONS.REPLACE_ARTICLES,
        payload: {
          articles: [
            {
              test: 'test1',
              test2: 'test2',
            },
          ],
        },
      }
      expect(reducer(state, action)).toEqual({
        articles: [
          {
            test: 'test1',
            test2: 'test2',
          },
        ],
      })
    })
  })
})
