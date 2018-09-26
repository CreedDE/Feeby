import { connect } from 'react-redux'
import Card from '../components/Card'

const mapStateToProps = state => ({
  title: state.title,
  source: state.source,
  img: state.source,
})

export default connect(mapStateToProps)(Card)
