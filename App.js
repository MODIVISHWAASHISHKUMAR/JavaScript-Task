import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import your custom CSS for styling

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace 'YOUR_API_KEY' with your actual API key
  const API_KEY = 'YOUR_API_KEY';
  const API_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=india%20news`;

  // Fetch the news on component mount
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setNews(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError('Something went wrong while fetching the news.');
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <div className="App">
      <h1>Today's News in India</h1>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="news-container">
          {news.map((newsItem, index) => (
            <div key={index} className="news-card">
              <img
                src={newsItem.image_url || 'https://via.placeholder.com/150'}
                alt={newsItem.title}
                className="news-image"
              />
              <h3>{newsItem.title}</h3>
              <p>{newsItem.description}</p>
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [amount, setAmount] = useState(1);
//   const [fromCurrency, setFromCurrency] = useState("USD");
//   const [toCurrency, setToCurrency] = useState("INR");
//   const [conversionRate, setConversionRate] = useState(null);
//   const [currencies, setCurrencies] = useState([]);
//   const [convertedAmount, setConvertedAmount] = useState(null);
//   const apiKey = 'cur_live_5MPl1VUxYeGU87MGoVJ37V8FQNVHpGrPvRb1fSzj';

//   useEffect(() => {
//     // Check localStorage for saved currencies and amount
//     const savedFromCurrency = localStorage.getItem('fromCurrency');
//     const savedToCurrency = localStorage.getItem('toCurrency');
//     const savedAmount = localStorage.getItem('amount');

//     if (savedFromCurrency && savedToCurrency && savedAmount) {
//       setFromCurrency(savedFromCurrency);
//       setToCurrency(savedToCurrency);
//       setAmount(savedAmount);
//     }

//     // Fetch the list of currencies
//     axios.get(`https://api.currencyapi.com/v3/currencies?apikey=${apiKey}`)
//       .then(response => {
//         setCurrencies(Object.keys(response.data.data));
//       })
//       .catch(err => console.log("Error fetching currencies: ", err));

//     // Fetch the conversion rate and calculate the result
//     fetchConversionRate();
//   }, []);

//   useEffect(() => {
//     if (fromCurrency && toCurrency && amount) {
//       // Store the selected currencies and amount in localStorage
//       localStorage.setItem('fromCurrency', fromCurrency);
//       localStorage.setItem('toCurrency', toCurrency);
//       localStorage.setItem('amount', amount);
//       fetchConversionRate();
//     }`
//   }, [fromCurrency, toCurrency, amount]);

//   const fetchConversionRate = () => {
//     axios.get(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${fromCurrency}`)
//       .then(response => {
//         const rate = response.data.data[toCurrency].value;
//         setConversionRate(rate);
//         setConvertedAmount(amount * rate);
//       })
//       .catch(err => console.log("Error fetching conversion rate: ", err));
//   };

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//     if (conversionRate !== null) {
//       setConvertedAmount(e.target.value * conversionRate);
//     }
//   };

//   const handleCurrencyChange = () => {
//     fetchConversionRate();
//   };

//   return (
//     <div className="App">
//       <h1>Currency Converter</h1>

//       <div className="input-container">
//         <div>
//           <label>Amount: </label>
//           <input 
//             type="number" 
//             value={amount} 
//             onChange={handleAmountChange} 
//             min="0" 
//           />
//         </div>

//         <div>
//           <label>From Currency: </label>
//           <select 
//             value={fromCurrency} 
//             onChange={(e) => {
//               setFromCurrency(e.target.value);
//               handleCurrencyChange();
//             }}>
//             {currencies.map(currency => (
//               <option key={currency} value={currency}>{currency}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label>To Currency: </label>
//           <select 
//             value={toCurrency} 
//             onChange={(e) => {
//               setToCurrency(e.target.value);
//               handleCurrencyChange();
//             }}>
//             {currencies.map(currency => (
//               <option key={currency} value={currency}>{currency}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div>
//         {convertedAmount !== null && (
//           <h2>
//             {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
//           </h2>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import Demo from './demo';
 
// function App() {
//   return (
//      <div className="App">
//       <Demo/>
//       </div>
//   );}
// export default App;


// Filename - App.js

// import React from "react";

// function App() {

//     // Declared an array of items
//     const fruits = ["Apple", "Mango", "Banana", "GFG"];

//     // Some styling for the items
//     const styles = {
//         backgroundColor: "white",
//         width: "50px",
//         marginBottom: "10px",
//         padding: "10px",
//         color: "green",
//         boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
//     };

//     return (
//         <>
//             {
//                 /*  This maps each array item to a div adds
//                 the style declared above and return it */
//                 fruits.map((fruit) => (
//                     <div key={fruit} style={styles}>
//                         {fruit}
//                     </div>
//                 ))
//             }
//         </>
//     );
// }

//export default App;

// import React from 'react';
// // import Mapdemo from './Mapdemo';  // Import the Mapdemo component
// import FectchApi from './FetchApi';
// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Array Rendering Demo</h1> */}
//       {/* <Mapdemo />  */}
//       <FectchApi/> {/* Render the Mapdemo component */}
//     </div>
//   );
// }

// export default App;


//  import React from 'react';
//  import TodoApp from './TodoApp ';
 
// function App() {
//    return (
//       <div className="App">
//       <TodoApp/> 
//        </div>
//    );}
//  export default App;





