import React from 'react';
// import ChildComponent from './ChildComponent';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';
import { useState } from 'react'

// class MyComponent extends React.Component {

//     state = {
//         // Name: 'Vu',
//         // Age: 20,
//         // Address: 'HCM'
//         listUser: [
//             {id: 1, Name: "Dung", Age: 49, Address: "HCM"},
//             {id: 2, Name: "Hoang", Age: 17, Address: "HN"},
//             {id: 3, Name: "Chien", Age: 32, Address: "DN"},
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//     }

//     handleDelteUser = (userId) => {
//         let listUserCurrent = this.state.listUser;
//         listUserCurrent = listUserCurrent.filter(item => item.id !== userId);
//         this.setState({
//             listUser: listUserCurrent
//         })
//     }

//     render () {
//         return (
//             <>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}>
//                 </AddUserInfor>
                
//                 {/* <ChildComponent Name={this.state.Name}
//                                 Age={this.state.Age}
//                                 Address={this.state.Address}
//                 ></ChildComponent> */}
//                 <hr/>
//                 <DisplayInfor 
//                     listUser={this.state.listUser}
//                     handleDelteUser={this.handleDelteUser}
//                     >
//                 </DisplayInfor>
//             </> 
//         );
//     }
// }

// export default MyComponent;

const MyComponent = (props) => {

    const [listUser, setlistUser] = useState(
        [
            {id: 1, Name: "Dung", Age: 49, Address: "HCM"},
            {id: 2, Name: "Hoang", Age: 17, Address: "HN"},
            {id: 3, Name: "Chien", Age: 32, Address: "DN"},
        ]
    )

    const handleAddNewUser = (userObj) => {
       setlistUser([userObj, ...listUser])
    }

    const handleDelteUser = (userId) => {
        if (listUser.length === 1) {
            alert("No users to delete");
        }
        let listUserCurrent = listUser;
        listUserCurrent = listUserCurrent.filter(item => item.id !== userId);
        setlistUser(listUserCurrent)
    }
    
    const handleDeleteAllUsers = () => {
        setlistUser([])
    }

    return (
        <>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}>
            </AddUserInfor>
            
            {/* <ChildComponent Name={this.state.Name}
                            Age={this.state.Age}
                            Address={this.state.Address}
            ></ChildComponent> */}
            <hr/>
            <DisplayInfor 
                listUser={listUser}
                handleDelteUser={handleDelteUser}
                handleDeleteAllUsers={handleDeleteAllUsers}
                >
            </DisplayInfor>
        </> 
    )
}

export default MyComponent;