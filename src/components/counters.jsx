import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    render() { 
        return (
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-small m-2">Reset</button>
            <br></br>

            {this.props.counters.map(counter => (
            <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter}>
            </Counter>
            ))}
        </div>
        );
    }
}
 
export default Counters;