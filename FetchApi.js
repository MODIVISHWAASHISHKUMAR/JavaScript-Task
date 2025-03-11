import React from 'react';
import axios from 'axios';

class FectchApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydata: [] }; // Initialize mydata as an empty array
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        // console.log(res.data); // Check the response structure
        this.setState({ mydata: res.data });  // Assuming res.data is the array
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        {/* Ensure mydata is defined and is an array before calling map */}
        {this.state.mydata && Array.isArray(this.state.mydata) && this.state.mydata.map((value, index) => (
          <div key={index}>
            <h2>{value.title}</h2>
            <p>{value.url}</p>
            {/* <img width={150} src={value.image}  /> */}
          </div>
        ))}
      </>
    );
  }
}

export default FectchApi;
