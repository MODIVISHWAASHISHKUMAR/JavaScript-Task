// // ForgotPassword.js
// import React from 'react';

// class ForgotPassword extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       phone: '',
//       newPassword: '',
//       confirmPassword: '',
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, phone, newPassword, confirmPassword } = this.state;

//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (!newPassword || !confirmPassword) {
//       alert("Please enter both new password and confirm password.");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     if (storedUser) {
//       if (storedUser.email === email || storedUser.phone === phone) {
//         storedUser.password = newPassword;
//         localStorage.setItem("user", JSON.stringify(storedUser));
//         alert("Password updated successfully!");
//         this.props.history.push("/login");
//       } else {
//         alert("No user found with this email or phone number.");
//       }
//     }
//   };

//   render() {
//     const { email, phone, newPassword, confirmPassword } = this.state;

//     return (
//       <div>
//         <h2>Forgot Password</h2>
//         <form onSubmit={this.handleSubmit}>
//           <input type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="Email" /><br />
//           <input type="text" name="phone" value={phone} onChange={this.handleInputChange} placeholder="Phone" /><br />
//           <input type="password" name="newPassword" value={newPassword} onChange={this.handleInputChange} placeholder="New Password" required /><br />
//           <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleInputChange} placeholder="Confirm Password" required /><br />
//           <button type="submit">Reset Password</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ForgotPassword;


import React, { Component } from 'react';
import './App.css';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      newPassword: '',
      confirmPassword: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, phone, newPassword, confirmPassword } = this.state;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (storedUser && (storedUser.email === email || storedUser.phone === phone)) {
      storedUser.password = newPassword;
      localStorage.setItem("user", JSON.stringify(storedUser));
      alert("Password reset successfully!");
    } else {
      alert("No user found with this email or phone number.");
    }
  };

  render() {
    const { email, phone, newPassword, confirmPassword } = this.state;

    return (
      <div className="form-container">
        <h2>Forgot Password</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="Email" /><br />
          <input type="text" name="phone" value={phone} onChange={this.handleInputChange} placeholder="Phone" /><br />
          <input type="password" name="newPassword" value={newPassword} onChange={this.handleInputChange} placeholder="New Password" required /><br />
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleInputChange} placeholder="Confirm Password" required /><br />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
