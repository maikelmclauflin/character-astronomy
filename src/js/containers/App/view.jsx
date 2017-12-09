import * as React from 'react'
import {
    Item
} from '../../components'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    resetValue() {
        this.setState({
            addValue: ''
        });
    }
    render() {
        const component = this;
        const {
            props,
            state
        } = component;
        let {
            title,
            list,
            actions
        } = props;
        title = title || 'It Doesn\'t work!';
        const addValueState = state.addValue;
        const hasInList = list.find(item => {
            return item.value === addValueState;
        })
        return (<div>
            <span>{title}</span>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    const {
                        addButton
                    } = component;
                    const value = addButton.value;
                    actions.listAdd({
                        value
                    });
                    this.resetValue();
                }}>
                <input
                    type="text"
                    value={addValueState || ''}
                    onChange={e => {
                        const addValue = component.addButton.value;
                        component.setState({
                            addValue
                        })
                    }}
                    ref={(input) => {
                        component.addButton = input;
                    }}/>
                <button
                    disabled={!addValueState || hasInList}>add</button>
            </form>
            <ul>{list.map((item) => {
                return (<li
                    key={item.value}>
                    <Item {...item}
                        onClickX={() => {
                            actions.listRemove(item);
                        }}></Item>
                </li>);
            })}</ul>
        </div>);
    }
}

export default App;