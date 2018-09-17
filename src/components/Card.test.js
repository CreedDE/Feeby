import Card from './Card'

describe('Card', () => {
  it('return true', () => {
    const state = {
      title: 'news',
      source: 'lorem ipsum',
    }

    expect(Card(state, { title: 'news', source: 'lorem ipsum' })).toBe(state)
  })
})
