// {/*import React from 'react';
//import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Welcome to My React App</h1>
//           <nav>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About</Link></li>
//             </ul>
//           </nav>
//         </header>
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App;*/}

//import { isFormElement } from "react-router-dom/dist/dom";


// import React from 'react';

// function EventDemo() {
//   function ClickDemo(e) {
//     console.log(e.target.value);
//   }

//   function checkData(e) {
//     var year = e.target.txt1.value;
//     if (year % 4 === 0) {
//       alert('Year is leap year');
//     } else {
//       alert('Year is not leap year');
//     }
//     e.preventDefault();
//   }
//   return (
//     <>
//       <h1>EventDemo</h1>
//       Textbox: <input type="text" onChange={ClickDemo} name="txt1" />
//       <input
//         type="button"
//         name="btn1"
//         value="I am Button 1"
//         onClick={ClickDemo}
//       />
//       <input
//         type="button"
//         name="btn2"
//         value="I am Button 2"
//         onClick={ClickDemo}
//       />
//       <input
//         type="button"
//         value="I am Button"
//         onClick={() => alert('Welcome')}
//       />
//       <form onSubmit={checkData}>
//         Year: <input type="text" name="txt1" />
//         <input type="submit" />
//       </form>
//     </>
//   );
// }
// export default EventDemo;
import React from 'react';
class EventDemo extends React.Component{
    constructor(props){
       super(props);
         this.state={};
 }
updateData(e){
     var a=e.target.txt1.value
     var b=e.target.txt2.value
     var c=parseInt(a)+parseInt(b)
     alert("Sum is"+c)
}
render(){
     return(
        <>
         <form onSubmit={this.updateData.bind(this)}>
             No1:<input type='text' name='txt1'/>
             No2:<input type='text' name='txt2'/>
            <input type="submit" value="+"/>
         </form>
        </>
     );
}
}
export default EventDemo;
