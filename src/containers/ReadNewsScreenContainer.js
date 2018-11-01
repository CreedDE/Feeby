import { connect } from 'react-redux'
import { getArticlesFromServer } from '../actions'
import ReadNewsScreen from '../screens/ReadNewsScreen'

const mapStateToProps = (state, ownProps) => {
  const index = ownProps.location.search.split('=')[1]
  return {
    article: state.articles[index],
  }
}

const mapDispatchToProps = dispatch => ({
  onLoadApi: () => dispatch(getArticlesFromServer()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadNewsScreen)
