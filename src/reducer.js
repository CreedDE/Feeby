import ACTIONS from './actions'

const initialState = {
  articles: [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case ACTIONS.REPLACE_ARTICLES:
    return {
      ...state,
      articles: action.payload.articles,
    }
  default:
    return state
  }
}
