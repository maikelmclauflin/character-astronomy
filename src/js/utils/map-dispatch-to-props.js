import * as actions from '../actions';
import {
    bindActionCreators
} from 'redux';
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export {
    mapDispatchToProps
};