import {
    connect
} from 'react-redux'
import view from './view'
import {
    mapDispatchToProps
} from '../../utils/map-dispatch-to-props'

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(view);

export {
    App
}

function mapStateToProps(state) {
    return {
        ...state.menu
    }
}