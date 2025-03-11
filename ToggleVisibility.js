import React, { useState } from 'react';
function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <h1>Toggle Visibility</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Paragraph' : 'Show Paragraph'}
      </button>
      {isVisible && <p>This is a toggleable paragraph!</p>}
    </div>
  );
}
export default ToggleVisibility;
