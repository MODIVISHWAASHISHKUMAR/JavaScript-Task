// import React from "react";
// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       error: "",
//     };
// }
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = this.state;
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.email === email && user.password === password) {
//       alert("Login successful!");
//       this.props.history.push("/update"); // Redirect to update page
//     } else {
//       this.setState({ error: "Invalid email or password" });
//     }
//   };
// render(){
//     return(
//         <div>
//         <h1>Login</h1>
//         {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
//         <form onSubmit={this.handleSubmit}>
//           Email : <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//         <br/>
//           Password : <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//           <br/>
//           <button type="submit">Login</button>
//         </form>
//         <button onClick={() => this.props.history.push("/forgot-password")}>
//           Forgot Password?
//         </button>
//         <button onClick={() => this.props.history.push("/change-password")}>
//           Change Password?
//         </button>
//         </div>
//     );
//   }}
// export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login Successful!");
      this.props.history.push("/update-profile");
    } else {
      alert("Invalid Email or Password.");
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="Email" required /><br />
          <input type="password" name="password" value={password} onChange={this.handleInputChange} placeholder="Password" required /><br />
          <button type="submit">Login</button>
        </form>
        <Link to="/forgot-password">Forgot Password</Link>
        <br />
        <Link to="/change-password">Change Password</Link>
      </div>
    );
  }
}

export default Login;
