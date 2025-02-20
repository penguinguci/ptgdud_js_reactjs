import React from "react";
import Contact from "./Contact";

class ContactList extends React.Component {

    state = {
        listContacts: [
            {
                id: 1,
                firstName: "Chidi",
                lastName: "Anagonye",
                phone: "555-366-8987",
                address: "St. John's University, Sydney, Australia"
            },
            {
                id: 2,
                firstName: "Eleanor",
                lastName: "Shellstrop",
                phone: "555-366-8987",
                address: "335 Avalon St, Apt 2C, Phoenix, Arizona"
            },
            {
                id: 3,
                firstName: "Tahani",
                lastName: "Al-Jamil",
                phone: "555-366-8987",
                address: "1 Lancaster Terrace, London, England"
            },
            {
                id: 4,
                firstName: "Jason",
                lastName: "Mendoza",
                phone: "555-366-8987",
                address: "779 William St, Miami, Florida"
            }
        ]
    }

    render() {
        return (
             <>
                <Contact
                    listContacts={this.state.listContacts}
                />
             </>
        );
    }
}

export default ContactList;