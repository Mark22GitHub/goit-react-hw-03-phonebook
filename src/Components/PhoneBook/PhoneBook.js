import React, { Component } from 'react';
import Form from '../Form/Form'
import ContactList from '../ContactList/ContactList'
import { v4 as uuidv4 } from 'uuid'
import Filter from '../Filter/Filter'


class PhoneBook extends Component {
    state = {
        contacts: [],
        name: '',
        filter: ''
    }

    componentDidMount() {
        const saveStateContacts = localStorage.getItem('contacts')

        if (saveStateContacts) {
            this.setState({
               contacts: JSON.parse(saveStateContacts)
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
      
        if (prevState.contacts !== this.state.contacts) {
            
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
    }

    

    addContact = contact => {
        const { name } = contact
        if (this.state.contacts.every((contact) => !contact.name.includes(name))) {
            
        this.setState(prev => ({
        contacts: [...prev.contacts , {... contact, id: uuidv4()}]
    }))

        } else {
            alert(`${name} is already in contacts`)
     }
     
}

     deleteContact = id => {
        this.setState(prev => ({
            contacts: this.state.contacts.filter(contact => contact.id !== id)
    }))
}

 filterContact = () => {
     return this.state.contacts.filter(contact =>
         contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
     
 }
    
     onHandleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
     })
    }

    render() {
        return (
            <>
                
                <h1 className='title'>PhoneBook</h1>
                <Form addContact={this.addContact} />
            
                <h2 className='subtitle'>Contacts</h2>
                <Filter Filter={this.state.filter} onHandleChange={this.onHandleChange} />
                <ContactList contacts={this.state.filter ? this.filterContact() : this.state.contacts} deleteContact={this.deleteContact} />

                </>
        );
    }
}

export default PhoneBook;