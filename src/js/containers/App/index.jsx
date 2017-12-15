import { connect } from 'react-redux'
import view from './view'
import { mapDispatchToProps } from '../../utils'
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(view);

export { App }

function mapStateToProps(state) {
    const {
        menu,
        list
    } = state;
    const title = menu.get('title');
    return {
        title,
        list
    }
}