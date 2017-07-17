import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

import Search from './Search';

export default connect(mapStateToProps, mapDispatchToProps)(Search);

function mapStateToProps (state) {
	const { query, resultList } = state.Search;
	return {
		query,
		resultList
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}