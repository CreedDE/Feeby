import { createAction } from 'redux-actions'

const ACTIONS = {
  IMPORT_API: 'IMPORT_API',
}

export const importApi = createAction(ACTIONS.IMPORT_API)

export default ACTIONS
