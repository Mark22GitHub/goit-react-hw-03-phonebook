import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (

            <div>
                <h3 className='filterByName'>Find contacts by name:</h3>
                 <label>
                <input name='filter' onChange={this.props.onHandleChange} value={this.props.filter} />
            </label>
            </div>
           
        );
    }
}

export default Filter;