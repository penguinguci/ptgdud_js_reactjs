import React from "react";

class AddUserInfor extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        Name: '',
        Age: '',
        Address: ''
      }
    }

    handleChangeName = (event) => {
      this.setState({
        Name: event.target.value
      })
    } 

    handleChangeAge = (event) => {
      this.setState({
        Age: event.target.value
      })
    }

    handleChangeAddress = (event) => {
      this.setState({
        Address: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      if (!this.state.Name || !this.state.Age || !this.state.Address) {
        alert('Please enter all fields');
        return;
      } 

      this.props.handleAddNewUser({
        id: Math.floor(Math.random() * 10000),
        Name: this.state.Name,
        Age: this.state.Age,
        Address: this.state.Address
      })

      this.setState({
        Name: '',
        Age: '',
        Address: ''
      })
    }

    render() {
      return (
        <form style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              My name is: {this.state.Name}
            </label>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              Age: {this.state.Age}
            </label>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              Address: {this.state.Address}
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '15px' }}>
            <label style={{ width: '30%', fontWeight: 'bold', color: '#333' }}>Your name:</label>
            <input 
              type="text" 
              value={this.state.Name}
              onChange={(event) => this.handleChangeName(event)}
              style={{ width: '65%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '15px' }}>
            <label style={{ width: '30%', fontWeight: 'bold', color: '#333' }}>Your Age:</label>
            <input 
              type="text" 
              value={this.state.Age}
              onChange={(event) => this.handleChangeAge(event)}
              style={{ width: '65%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}>
            <label style={{ width: '30%', fontWeight: 'bold', color: '#333' }}>Your address:</label>
            <input 
              type="text" 
              value={this.state.Address}
              onChange={(event) => this.handleChangeAddress(event)}
              style={{ width: '65%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <button
            type="submit"
            onClick={(event) => this.handleSubmit(event)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', fontWeight: 'bold', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Submit
          </button>
        </form>

      )
    }
}

export default AddUserInfor;