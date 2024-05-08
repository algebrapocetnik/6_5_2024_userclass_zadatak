import React, { Component } from "react";

class UserProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.firstname,
      surname: props.lastname,
      age: null,
      points: null,
    };
  }
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleSurnameChange = (e) => {
    this.setState({ surname: e.target.value });
  };
  handleAgeChange = (e) => {
    this.setState({ age: e.target.value });
  };
  handlePointChange = (e) => {
    this.getState({ points: e.target.value });
  };

  render() {
    const { name, surname, age, points } = this.state;

    return (
      <>
        <p>
          Firstname: <b>{name}</b>
        </p>
        <input value={name} onChange={this.handleNameChange}></input>
        <br></br>
        <p>
          Lastname: <b>{surname}</b>
        </p>
        <input value={surname} onChange={this.handleSurnameChange}></input>
        <p>
          Age: <b>{age}</b>
        </p>
        <input
          type="number"
          min={0}
          value={age}
          onChange={this.handleAgeChange}
        ></input>
        <p>
          Points: <b>{points}</b>
        </p>
        <input
          type="number"
          min={0}
          value={points}
          onChange={this.handlePointChange}
        ></input>
      </>
    );
  }
}

export default UserProfileClass;
