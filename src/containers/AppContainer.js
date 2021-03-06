import * as Actions from '../actions'
import * as appActions from '../actions/appActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import App from '../components/App/App'

function mapStateToProps(state) {
  return {
    results: state.demo.results,
    app: state.app,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
