import ACTIONS from './actions'

const initialState = {
  news: [
    {
      title: 'Titel von der News',
      source: 'Beschreibung von der News',
      img: 'https://source.unsplash.com/random/355x170',
    },
    {
      title: '2 Titel von der News',
      source: 'Beschreibung von der 2 News',
      img: 'https://source.unsplash.com/random/355x170',
    },
    {
      title: '3 Titel von der News',
      source: 'Beschreibung von der 3 News',
      img: 'https://source.unsplash.com/random/355x170',
    },
  ],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case ACTIONS.RENDER_ALL_NEWS:
    return {
      ...state,
      title: action.payload.title,
      source: action.payload.source,
      img: action.payload.img,
    }
  default:
    return state
  }
}
