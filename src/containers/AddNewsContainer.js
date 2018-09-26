import { connect } from 'react-redux'
import AddNewsScreen from '../screens/AddNewsScreen'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewsScreen)
