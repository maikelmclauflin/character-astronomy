class Item extends React.PureComponent {
    render() {
        const {
            value,
            onClickX
        } = this.props;
        return (<div>
            {value}
            <button
                onClick={e => {
                    e.preventDefault();
                    onClickX();
                }}>remove</button>
        </div>);
    }
}

export {
    Item
}