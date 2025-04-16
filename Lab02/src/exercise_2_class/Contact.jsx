import React from "react";
import './Contact.scss'

// class Contact extends React.Component {
    
//     constructor(props) {
//         super(props)
//         this.state = ({
//             firstName: '',
//             lastName: '',
//             phone: '',
//             address: ''
//         })
//     }

//     render() {
//         const {listContacts} = this.props;
//         console.log(listContacts)
//         return (
//             <div style={{display: "flex"}}>
//                 {listContacts && listContacts.map((contact) => {
//                     return (
//                         <div className="contact" key={contact.id} >  
//                             <div className="fname">{contact.firstName}</div>
//                             <div className="lname">{contact.lastName}</div>
//                             <br />
//                             <div className="phone">Phone: {contact.phone}</div>
//                             <br />
//                             <div className="address">Address: {contact.address}</div>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

// export default Contact;

const Contact = (props) => {
    // const [firstName, setFirstName] = React.useState('');
    // const [lastName, setLastName] = React.useState('');
    // const [phone, setPhone] = React.useState('');
    // const [address, setAddress] = React.useState('');

    return (
            <>
                <div style={{display: "flex"}}>
                    {props.listContacts && props.listContacts.map((contact) => {
                        return (
                            <div className="contact" key={contact.id} >  
                                <div className="fname">{contact.firstName}</div>
                                <div className="lname">{contact.lastName}</div>
                                <br />
                                <div className="phone">Phone: {contact.phone}</div>
                                <br />
                                <div className="address">Address: {contact.address}</div>
                                
                            </div>
                        )
                    })}
                </div>
            </>
    )
}

export default Contact;