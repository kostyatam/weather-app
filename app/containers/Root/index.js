import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions  from './actions';
import Root from './Root';

export default connect(mapStateToProps, mapDispatchToProps)(Root);

function mapStateToProps (state) {
	return {
		cities: state.Root.cities
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}