import ACTIONS from './actions'

const initialState = {
  articles: [],
}

const url =
  'https://newsapi.org/v2/top-headlines?' +
  'country=de&' +
  'apiKey=84b554b20b83402c880d4a2c9759b49e'

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case ACTIONS.IMPORT_API:
    return {
      articles: state.articles,
    }
  default:
    return state
  }
}
