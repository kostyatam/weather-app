import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Root from './Root';

export default connect(mapStateToProps, mapDispatchToProps)(Root);

function mapStateToProps (state) {
	const { user } = state.Root;
	return {
		user
	}
}

function mapDispatchToProps () {
	return {}
}