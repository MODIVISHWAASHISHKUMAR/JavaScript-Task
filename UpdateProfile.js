import React from "react";

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem("user"));
    this.state = { ...user };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { ...this.state };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated successfully!");
  };

  render() {
    return (
      <div>
        <h1>Update Profile</h1>
        <form onSubmit={this.handleUpdate}>
          Name : <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br/>
          Phone : <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <br/>
          Email : <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br/>
          Address : <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br/>
          Age : <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br/>
          Hobbies : <input
            type="text"
            name="hobbies"
            value={this.state.hobbies}
            onChange={this.handleChange}
          />
          <br/>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default UpdateProfile;
