import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Root from './Root';

export default connect(mapStateToProps, mapDispatchToProps)(Root);

function mapStateToProps (state) {
	return {}
}

function mapDispatchToProps () {
	return {}
}