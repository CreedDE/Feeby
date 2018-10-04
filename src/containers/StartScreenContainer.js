import { connect } from 'react-redux'
import StartScreen from '../screens/StartScreen'

const mapStateToProps = state => ({
  articles: state.articles,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen)
