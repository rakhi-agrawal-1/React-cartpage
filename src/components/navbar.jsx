import React, { Component } from 'react';


class Navbar extends Component {
    render() { 
        return (<nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <h3>Total Counters: 
                <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>

                </h3>
            </div>
          </nav>);
    }
}
 
export default Navbar;