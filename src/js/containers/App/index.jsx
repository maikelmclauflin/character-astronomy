import {
    connect
} from 'react-redux'
import view from './view'
import {
    mapDispatchToProps
} from '../../utils'

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(view);

export {
    App
}

function mapStateToProps(state) {
    return {
        ...state.menu,
        list: state.list
    }
}