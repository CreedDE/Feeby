import { createAction } from 'redux-actions'
import { loadArticles } from './services'

const ACTIONS = {
  REPLACE_ARTICLES: 'REPLACE_ARTICLES',
}

export const replaceArticles = createAction(ACTIONS.REPLACE_ARTICLES)
export const getArticlesFromServer = () => dispatch => {
  loadArticles().then(data =>
    dispatch(replaceArticles({ articles: data.articles }))
  )
}

export default ACTIONS
