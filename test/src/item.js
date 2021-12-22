import React from 'react';

class Item extends React.PureComponent {
    state = {

    }
    handleClick = () => {
        const {item} = this.props;
        let keys = Object.keys(item);
        let values = Object.values(item);
        this.setState((prev) => ({
            open: !prev.open,
            keys: keys, values: values
        }))
    }
    render() {
        const {item} = this.props;
        const {open, keys, values} = this.state;
        return (
            <React.Fragment key={item.MSTID}>
                <div>{item.First}</div>
                <div>{item.Last}</div>
                <div>{item.Nationality}</div>
                <div>{item.Score}</div>
                <div>{item.position}</div>
                <button
                onClick={this.handleClick}
                >View All</button>
                {open && (
                    <div className="bg-white">
                    <button
                    onClick={this.handleClick}
                    >X Close</button>
                    <div className="flex-two">
                        <div>{keys.map(x => {
                            return <div>{x}</div>
                        })}</div>
                        <div>{values.map(x => {
                            return <div>{x}</div>
                        })}</div>
                    </div>
                    </div>
                )}
           </React.Fragment>
        )
    }
}

export default Item;