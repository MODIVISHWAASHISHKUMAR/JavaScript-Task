import React from 'react';

const Demo = () => {
  var myarry = [99, 1, 8, 66, 7, 5];

  
  for (var i = 0; i < myarry.length; i++) {
    console.log("value is " + myarry[i] + ", Index is " + i + ", Array: " + myarry);
  }

  
  myarry.forEach((v, i) => {
    console.log("value is " + v + ", Index is " + i + ", Array: " + myarry);
  });

  
  return (
    <div>
      <h1>Logging Array Data</h1>
      <p>Check the console for logged array values.</p>
    </div>
  );
};

export default Demo;
