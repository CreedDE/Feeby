export function save(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function load(name) {
  const dataString = localStorage.getItem(name)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    return { error }
  }
}

export function loadPlayers() {
  return fetch('http://localhost:3001/players')
    .then(res => res.json())
    .catch(() => {
      return []
    })
}
