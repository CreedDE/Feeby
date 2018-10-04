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
        articles: [
          {
            source: { id: null, name: 'name of source' },
            author: 'author of news',
            title: 'title of news',
            description: 'description of news',
            url: 'url of news',
            urlToImage: 'url to image of news',
            publishedAt: 'published date 01.10.2018',
            content: 'content of full news',
          },
        ],
      }
      const action = {
        type: ACTIONS.REPLACE_ARTICLES,
      }
      expect(reducer(state, action)).toEqual({
        articles: [
          {
            source: { id: null, name: 'name of source' },
            author: 'author of news',
            title: 'title of news',
            description: 'description of news',
            url: 'url of news',
            urlToImage: 'url to image of news',
            publishedAt: 'published date 01.10.2018',
            content: 'content of full news',
          },
        ],
      })
    })
  })
})
