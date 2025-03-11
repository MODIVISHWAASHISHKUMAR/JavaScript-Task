import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Home Page</h2>
        <p>Welcome to the Home Page!</p>
      </div>
    </div>
  );
}
export default Home;

