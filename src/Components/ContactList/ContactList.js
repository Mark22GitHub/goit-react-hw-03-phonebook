import React from 'react';
import PropTypes from 'prop-types'

const ContactList = ({contacts , deleteContact })=> {
    return (
       <>
            <ul>
                {contacts.map(contact =>
                    <li key={contact.id}>{contact.name} : {contact.number}
                        <button onClick={() => deleteContact(contact.id)} className='deleteBtn' type='button'>Delete</button>
                     </li>
                    )}
            </ul>
       </>
    );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,


}