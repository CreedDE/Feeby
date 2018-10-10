import { connect } from 'react-redux'
import { getArticlesFromServer } from '../actions'
import ReadNewsScreen from '../screens/ReadNewsScreen'

const mapStateToProps = state => ({
  articles: state.articles,
})

const mapDispatchToProps = dispatch => ({
  onLoadApi: () => dispatch(getArticlesFromServer()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadNewsScreen)
