import * as React from 'react'

class App extends React.Component {
    render() {
        const title = this.props.title || "It Doesn't Work!";
        return (<div>
            <span>{title}</span>
        </div>);
    }
}

export default App;