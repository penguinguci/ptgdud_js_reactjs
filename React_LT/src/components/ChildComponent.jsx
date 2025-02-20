import React from "react";

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
        }
    }

    handleInput = (event) => {
        this.setState({
            valueInput: event.target.value,
        })
    }

    render() {
        let {name, age, address} = this.props;
        return (
            <>
                <div>My name is: {this.state.valueInput}</div>
                <div>My age is: </div>
                <div>
                    <input value={this.state.valueInput} type="text" 
                            placeholder="Enter your name"
                            onChange={(event) => this.handleInput(event)}
                    />
                </div>
                {/* <div>
                    <input value={this.state.valueInputAge} type="text" />
                </div> */}
            </>
        );
    }
}

export default ChildComponent;