import { connect } from 'react-redux'
import StartScreen from '../screens/StartScreen'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen)
