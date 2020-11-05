import React, { Component } from 'react';
import './Form.css'


const initialState = {
     name: '',
     number: '',
}
class Form extends Component {

    state = {
       ...initialState,
    }

    onHandleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
     })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...this.state });
        this.props.addContact({ ...this.state })
        this.setState({...initialState})
    }


    render() {
        return (
            <>
      <form className='ContactForm' onSubmit={this.onHandleSubmit}>
          
        <label>
          Name:
          <input onChange={this.onHandleChange} name='name' className='inputName' value={this.state.name}/>
        </label>
        
        <label>
          Number:
          <input onChange={(e) => this.onHandleChange(e)} name='number' className='inputNumber' value={this.state.number}/>
        </label>
        
        <button className='formBtn' type='submit'>
          Add contact
         </button>
                    
      </form>
      </> 
            
        );
    }
}

export default Form;