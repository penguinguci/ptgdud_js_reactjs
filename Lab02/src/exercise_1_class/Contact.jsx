import React from "react";
import './Contact.scss'

class Contact extends React.Component {
    
    chidi = {
        firstName: "Chidi",
        lastName: "Anagonye",
        phone: "555-366-8987",
        address: "St. John's University, Sydney, Australia",
    }

    render() {
        let {firstName, lastName, phone, address} = this.chidi;
        return (
            <div className="contact">  
                <div className="fname">{firstName}</div>
                <div className="lname">{lastName}</div>
                <br />
                <div className="phone">Phone: {phone}</div>
                <br />
                <div className="address">Address: {address}</div>
            </div>
        )
    }
}

export default Contact;