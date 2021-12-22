import React from 'react';
import Item from './item';

class List extends React.Component {
    
    componentDidUpdate() {
        const {data, handleClick, order} = this.props;
        console.log('update list', data.length)
    }
    render() {
        const {data, handleClick, order} = this.props;
        return (
            <div className="styling">
                <h1>Dashboard of Players</h1>
                <button
                onClick={handleClick}
                >{(order) ? "Remove order" :  "Order By Highest Score"}</button>
                <div className="grid">
                <div className="labels">
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>Nationality</div>
                    <div>Score</div>
                    <div>Position</div>
                    <div>View All Stats</div>
                </div>
                {data.map(item => {
                    return (<div className="item" key={item.MSTID}>
                        <Item item={item} />
                    </div>)
                })
                }
                </div>
            </div>
        )
    }
}

export default List;