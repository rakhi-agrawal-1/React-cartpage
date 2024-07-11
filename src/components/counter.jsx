import React, { Component } from 'react';

class Counter extends Component {

    
    
    render() { 
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}> {this.formatvalue()}</span>
            <button onClick ={() =>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> Delete</button>
            <br></br>
        </React.Fragment>
    );
}

//constructor(){
//     super();
//     this.handleIncrement=this.handleIncrement.bind(this);
// }



    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatvalue(){
    const {value} = this.props.counter;
    const x=0
    return value === 0 ? x : value;
}





}
 
export default Counter;