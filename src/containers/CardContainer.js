import { connect } from 'react-redux'
import Card from '../components/Card'

const mapStateToProps = state => ({
  articles: state.articles,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
