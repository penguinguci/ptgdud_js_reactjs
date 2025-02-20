import React from 'react';
// import ChildComponent from './ChildComponent';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';

class MyComponent extends React.Component {

    state = {
        // Name: 'Vu',
        // Age: 20,
        // Address: 'HCM'
        listUser: [
            {id: 1, Name: "Dung", Age: 49, Address: "HCM"},
            {id: 2, Name: "Hoang", Age: 17, Address: "HN"},
            {id: 3, Name: "Chien", Age: 32, Address: "DN"},
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    handleDelteUser = (userId) => {
        let listUserCurrent = this.state.listUser;
        listUserCurrent = listUserCurrent.filter(item => item.id !== userId);
        this.setState({
            listUser: listUserCurrent
        })
    }

    render () {
        return (
            <>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}>
                </AddUserInfor>
                
                {/* <ChildComponent Name={this.state.Name}
                                Age={this.state.Age}
                                Address={this.state.Address}
                ></ChildComponent> */}
                <hr/>
                <DisplayInfor 
                    listUser={this.state.listUser}
                    handleDelteUser={this.handleDelteUser}
                    >
                </DisplayInfor>
            </> 
        );
    }
}

export default MyComponent;