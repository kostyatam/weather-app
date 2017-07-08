import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import City from './City';

export default connect(mapStateToProps, mapDispatchToProps)(City);

function mapStateToProps (state, props) {
	const id = parseInt(props.match.params.id, 10);
	return {
		city: state.Root.cities.find(city => city.id === id),
		id
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}