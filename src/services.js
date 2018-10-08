export function loadArticles() {
  const url =
    'https://newsapi.org/v2/everything?q=bitcoin&pageSize=5&apiKey=84b554b20b83402c880d4a2c9759b49e'
  return fetch(url).then(res => res.json())
}
