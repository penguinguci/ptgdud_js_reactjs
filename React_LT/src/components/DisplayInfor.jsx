import React from "react";
import './DisplatInfor.scss';

class DisplayInfor extends React.Component {

    state = {
        showUsers: true
    }

    handleShowHide = () => {
        this.setState({
            showUsers: !this.state.showUsers
        })
    }

    handleOnclickDelete = (userId) => {
        this.props.handleDelteUser(userId);
    }

    render() {
        const {listUser} = this.props;
        let {showUsers} = this.state;
        return (
            <>  
                {showUsers === false ? 
                    <label 
                        className="show_hide"
                        htmlFor="show_hide"
                        onClick={() => this.handleShowHide()}
                    >Hide list user</label>
                    :
                    <>
                        <label 
                            className="show_hide"
                            htmlFor="show_hide"
                            onClick={() => this.handleShowHide()}
                        >Hide list user</label>
                        <div>
                            {listUser.map((user) => {
                                return (
                                    <>
                                        <div style={{display: 'flex', justifyContent: 'space-between'}} key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                                            <div style={{justifyItems: 'flex-start'}}>
                                                <div>User name is: {user.Name}</div>
                                                <div>User age is: {user.Age}</div>
                                                <div>User address is: {user.Address}</div>
                                            </div>
                                            <button style={{height: "50px", marginTop: "10px"}} className="btn-delete"
                                                onClick={() => this.handleOnclickDelete(user.id)}>
                                                Delete
                                            </button>
                                        </div>
                                        <hr/>
                                    </>
                                )
                            })}
                        </div>
                    </>
                }
            </>
        )
    }
}

export default DisplayInfor;