//increment and decrement
//import React from 'react';
// function Counter() {
//  const [count, setCount] = useState(0);
//  const increment = () => setCount(count + 1);
//  const decrement = () => setCount(count - 1);
// return (
//     <div>
//       <h1>Simple Counter</h1>
//       <p>Current Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }
// class Counter extends React.Component{
//   constructor(props){
//   super(props);
//   this.state={counter:0};
// }
// render(){
//   return(
//     <>
//     <h1>{this.state.counter}</h1>
//     <input type='button' value="+" onClick={()=>this.setState({counter:this.state.counter+1})}/>
//     <input type='button' value="-" onClick={()=>this.setState({counter:this.state.counter-1})}/>
//     <input type='button' value="X" onClick={()=>this.setState({counter:0})}/>
//     </>
//   )
// }}
// export default Counter;



// import React from 'react';
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0, 
//     };
//   }
//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };
//   decrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h1>Counter</h1>
//         <p>Count: {count}</p>
//         {count < 5 && (
//           <button onClick={this.increment}>
//             Increment
//           </button>
//         )}
//         {count > 0 && (
//           <button onClick={this.decrement}>
//             Decrement
//           </button>
//         )}
//       </div>
//     );
//   }
// }
// export default Counter;

// import React, { useState, useEffect } from "react";

// function Counter() {
//   const [count, setCount] = useState(() => {
//     const savedCount = localStorage.getItem("counter");
//     return savedCount ? JSON.parse(savedCount) : 0;
//   });
//   useEffect(() => {
//     localStorage.setItem("counter", JSON.stringify(count));
//   }, [count]);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment} style={{ padding: "10px 20px", fontSize: "16px" }}>
//         Increment
//       </button>
//     </div>
//   );
// }
// export default Counter;
import React from "react";
class Counter extends React.FragmentComponent {
  constructor(props) {
    super(props);
    const savedCount = localStorage.getItem("counter");
    this.state = {
      count: savedCount ? JSON.parse(savedCount) : 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("counter", JSON.stringify(this.state.count));
    }
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter: {this.state.count}</h1>
        <button
          onClick={this.increment}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Increment
        </button>
      </div>
    );
  }
}
export default Counter;
