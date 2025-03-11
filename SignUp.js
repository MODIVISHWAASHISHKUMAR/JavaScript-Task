// import React from "react";
// class SignUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       phone: "",
//       email: "",
//       address: "",
//       age: "",
//       hobbies: "",
//       password: "",
//       error: "",
//     };
//   }
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   validateForm = () => {
//     const { name, phone, email, address, age, hobbies, password } = this.state;
//     if (!name || !phone || !email || !address || !age || !hobbies || !password) {
//       this.setState({ error: "All fields are required!" });
//       return false;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       this.setState({ error: "Invalid email format!" });
//       return false;
//     }
//     if (isNaN(phone)) {
//       this.setState({ error: "Phone number must be numeric!" });
//       return false;
//     }
//     if (parseInt(age) < 18) {
//       this.setState({ error: "Age must be 18 or above!" });
//       return false;
//     }
//     return true;
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (!this.validateForm()) return;
//     const { name, phone, email, address, age, hobbies, password } = this.state;
//     const user = { name, phone, email, address, age, hobbies, password };
//     localStorage.setItem("user", JSON.stringify(user));
//     alert("User registered successfully!");
//     this.props.history.push("/login"); // Redirect to login page
//   };
//   render() {
//     return (
//       <div>
//         <h1>Sign Up</h1>
//         {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
//         <form onSubmit={this.handleSubmit}>
//           Name : <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//           <br/>
//           Phone : <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={this.state.phone}
//             onChange={this.handleChange}
//           />
//           <br/>
//           Email ID : <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//           <br/>
//           Address : <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={this.state.address}
//             onChange={this.handleChange}
//           />
//           <br/>
//           Age : <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={this.state.age}
//             onChange={this.handleChange}
//           />
//           <br/>
//           Hobbies : <input
//             type="text"
//             name="hobbies"
//             placeholder="Hobbies"
//             value={this.state.hobbies}
//             onChange={this.handleChange}
//           />
//           <br/>
//           Password : <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//           <br/>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default SignUp;

import React from 'react';
import './App.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      age: '',
      hobbies: '',
      password: '',
      errors: {}
    };
  }

  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  
  validate = () => {
    const { name, phone, email, address, age, hobbies, password } = this.state;
    const errors = {};
    let formIsValid = true;

    
    if (!name) {
      formIsValid = false;
      errors.name = 'Name is required';
    }

    
    if (!phone || phone.length < 10 || phone.length>10) {
      formIsValid = false;
      errors.phone = 'Phone number must be 10 digits';
    }

    
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!email || !emailRegex.test(email)) {
      formIsValid = false;
      errors.email = 'Please enter a valid email address';
    }

    
    if (!address) {
      formIsValid = false;
      errors.address = 'Address is required';
    }

    
    if (!age || isNaN(age) || age <= 0) {
      formIsValid = false;
      errors.age = 'Please enter a valid age';
    }

    
    if (!hobbies) {
      formIsValid = false;
      errors.hobbies = 'Hobbies cannot be empty';
    }

    
    if (!password || password.length < 6) {
      formIsValid = false;
      errors.password = 'Password must be at least 6 characters';
    }

    this.setState({ errors });
    return formIsValid;
  };

  
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validate()) {
      const { name, phone, email, address, age, hobbies, password } = this.state;

      const userData = {
        name,
        phone,
        email,
        address,
        age,
        hobbies,
        password,
      };

      localStorage.setItem('user', JSON.stringify(userData)); // Save to localStorage
      alert('User Registered Successfully!');
      this.props.history.push('/login'); // Navigate to login page after successful registration
    } else {
      alert('Please correct the errors and try again.');
    }
  };

  render() {
    const { name, phone, email, address, age, hobbies, password, errors } = this.state;

    return (
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            NAME : <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              placeholder="Name"
            />
           
            <div className="error">{errors.name}</div>
          </div>
          <br/>
          <div>
            MOBILE NO : <input
              type="text"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
              placeholder="Phone"
            />
            <div className="error">{errors.phone}</div>
          </div>
          <br/>

          <div>
            EMAIL : <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder="Email"
            />
            <div className="error">{errors.email}</div>
          </div>
          <br/>

          <div>
            ADDRESS : <input
              type="text"
              name="address"
              value={address}
              onChange={this.handleInputChange}
              placeholder="Address"
            />
            <div className="error">{errors.address}</div>
          </div>
          <br/>

          <div>
            AGE : <input
              type="number"
              name="age"
              value={age}
              onChange={this.handleInputChange}
              placeholder="Age"
            />
            <div className="error">{errors.age}</div>
          </div>
          <br/>

          <div>
            HOBBIES : <input
              type="text"
              name="hobbies"
              value={hobbies}
              onChange={this.handleInputChange}
              placeholder="Hobbies"
            />
            <div className="error">{errors.hobbies}</div>
          </div>
          <br/>

          <div>
            PASSWORD : <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              placeholder="Password"
            />
            <div className="error">{errors.password}</div>
          </div>
          <br/>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;

