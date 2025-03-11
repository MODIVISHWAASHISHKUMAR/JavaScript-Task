// import React from 'react';
// class CountdownTimer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: 60, 
//       isRunning: false,
//       intervalId: null,
//     };
//   }
//   startTimer = () => {
//     if (!this.state.isRunning) {
//       this.setState({ isRunning: true });
//       const intervalId = setInterval(() => {
//         this.setState((prevState) => {
//           if (prevState.time <= 0) {
//             clearInterval(intervalId);
//             return { time: 0, isRunning: false };
//           }
//           return { time: prevState.time -1 }; 
//         });
//       }, 1000);
//       this.setState({ intervalId });
//     }
//   };
//   pauseTimer = () => {
//     if (this.state.isRunning) {
//       clearInterval(this.state.intervalId);
//       this.setState({ isRunning: false });
//     }
//   };
//   stopTimer = () => {
//     clearInterval(this.state.intervalId);
//     this.setState({ isRunning: false, time: 60 });
//   };
//   componentWillUnmount() {
//     if (this.state.intervalId) {
//       clearInterval(this.state.intervalId);
//     }
//   }
//   render( ) {
//     const { time, isRunning } = this.state;
//     return (
//       <div>
//         <h1>Countdown Timer</h1>
//         <div>
//           <p>Time: {time} seconds</p>
//           <button onClick={this.startTimer} disabled={isRunning}>
//             Start
//           </button>
//           <button onClick={this.pauseTimer} disabled={!isRunning}>
//             Pause
//           </button>
//           <button onClick={this.stopTimer}>
//             Stop
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
// export default CountdownTimer;

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  
  useEffect(() => {
    if (isRunning && time > 0) {
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(id);  
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(id);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);  
      }
    };
  }, [isRunning]);  
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);  
    }
  };
  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalId); 
      setIsRunning(false);
    }
  };
  const stopTimer = () => {
    clearInterval(intervalId); 
    setIsRunning(false);
    setTime(60); 
  };
  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <p>Time: {time} seconds</p>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={stopTimer}>
          Stop
        </button>
      </div>
    </div>
  );
};
export default CountdownTimer;
