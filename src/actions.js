import { createAction } from 'redux-actions'

const ACTIONS = {
  RENDER_ALL_NEWS: 'RENDER_ALL_NEWS',
  ADD_NEWS: 'ADD_NEWS',
}

export const renderAllNews = createAction(ACTIONS.RENDER_ALL_NEWS)
export const addNews = createAction(ACTIONS.ADD_NEWS)

export default ACTIONS
