// import React from "react";
// class ChangePassword extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       oldPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//       error: "",
//       success: "",
//     };
//   }
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { oldPassword, newPassword, confirmPassword } = this.state;

//     const user = JSON.parse(localStorage.getItem("user"));

//     if (user && user.password === oldPassword) {
//       if (newPassword === confirmPassword) {
//         user.password = newPassword;
//         localStorage.setItem("user", JSON.stringify(user));
//         this.setState({ success: "Password updated successfully!", error: "" });
//       } else {
//         this.setState({ error: "New password and confirmation don't match!" });
//       }
//     } else {
//       this.setState({ error: "Old password is incorrect!" });
//     }
//   };
//   render() {
//     return (
//       <div>
//         <h1>CHhange Password</h1>
//         {this.state.success && <p>{this.state.success}</p>}
//         {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
//         <form onSubmit={this.handleSubmit}>
//           OLD Password : <input
//             type="password"
//             name="oldPassword"
//             placeholder="Old Password"
//             value={this.state.oldPassword}
//             onChange={this.handleChange}
//           />
//           <br/>
//           NEW Password : <input
//             type="password"
//             name="newPassword"
//             placeholder="New Password"
//             value={this.state.newPassword}
//             onChange={this.handleChange}
//           />
//           <br/>
//           CONFIRM Password : <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm New Password"
//             value={this.state.confirmPassword}
//             onChange={this.handleChange}
//           />
//           <button type="submit">SUbmit Change Password</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ChangePassword;


import React, { Component } from 'react';
import './App.css';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      errors: {}
    };
  }

  // Handles form field changes
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Validation
  validate = () => {
    const { oldPassword, newPassword, confirmPassword } = this.state;
    const errors = {};
    let formIsValid = true;

    // Old password validation
    if (!oldPassword) {
      formIsValid = false;
      errors.oldPassword = 'Old password is required';
    }

    // New password validation
    if (!newPassword) {
      formIsValid = false;
      errors.newPassword = 'New password is required';
    } else if (newPassword.length < 6) {
      formIsValid = false;
      errors.newPassword = 'New password must be at least 6 characters';
    }

    // Confirm password validation
    if (!confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = 'Please confirm your new password';
    } else if (confirmPassword !== newPassword) {
      formIsValid = false;
      errors.confirmPassword = 'Passwords do not match';
    }

    this.setState({ errors });
    return formIsValid;
  };

  // Handles form submission
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validate()) {
      const { oldPassword, newPassword } = this.state;
      const user = JSON.parse(localStorage.getItem('user'));

      // Check if the old password matches the stored password in localStorage
      if (user && user.password === oldPassword) {
        // Update password
        user.password = newPassword;
        localStorage.setItem('user', JSON.stringify(user));
        alert('Password changed successfully!');
        this.props.history.push('/login'); // Redirect to login after successful change
      } else {
        alert('Old password is incorrect!');
      }
    }
  };

  render() {
    const { oldPassword, newPassword, confirmPassword, errors } = this.state;

    return (
      <div className="form-container">
        <h2>Change Password</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="password"
              name="oldPassword"
              value={oldPassword}
              onChange={this.handleInputChange}
              placeholder="Old Password"
            />
            <div className="error">{errors.oldPassword}</div>
          </div>

          <div>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={this.handleInputChange}
              placeholder="New Password"
            />
            <div className="error">{errors.newPassword}</div>
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
              placeholder="Confirm New Password"
            />
            <div className="error">{errors.confirmPassword}</div>
          </div>

          <button type="submit">Change Password</button>
        </form>
      </div>
    );
  }
}

export default ChangePassword;
