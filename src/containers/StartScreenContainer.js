import { connect } from 'react-redux'
import StartScreen from '../screens/StartScreen'
import { getArticlesFromServer } from '../actions'

const mapStateToProps = state => ({
  articles: state.articles,
})

const mapDispatchToProps = dispatch => ({
  onLoadApi: () => dispatch(getArticlesFromServer()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen)
