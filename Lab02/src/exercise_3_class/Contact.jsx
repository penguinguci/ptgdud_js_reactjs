import React from "react";
import './Contact.scss'

class Contact extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = ({
            firstName: '',
            lastName: '',
            phone: '',
            address: ''
        })
    }

    handleOnClickDelete = (contactId) => {
        this.props.handleDeleteContact(contactId);
    }

    handleOnClickDeleteAll = () => {
        this.props.handleDeleteAllContacts();
    }

    render() {
        const {listContacts} = this.props;
        console.log(listContacts)
        return (
            <>
                <div style={{display: "flex"}}>
                    {listContacts && listContacts.map((contact) => {
                        return (
                            <div className="contact" key={contact.id} >  
                                <div className="fname">{contact.firstName}</div>
                                <div className="lname">{contact.lastName}</div>
                                <br />
                                <div className="phone">Phone: {contact.phone}</div>
                                <br />
                                <div className="address">Address: {contact.address}</div>
                                <button onClick={() => this.handleOnClickDelete(contact.id)} className="btn_delete">Delete</button>
                            </div>
                        )
                    })}
                </div>
                <button onClick={() => this.handleOnClickDeleteAll()} className="btn_delete_all">Delete All</button>
            </>
        )
    }
}

export default Contact;