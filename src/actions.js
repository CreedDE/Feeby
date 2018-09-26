import { createAction } from 'redux-actions'

const ACTIONS = {
  RENDER_ALL_NEWS: 'RENDER_ALL_NEWS',
}

export const renderAllNews = createAction(ACTIONS.RENDER_ALL_NEWS)

export default ACTIONS
