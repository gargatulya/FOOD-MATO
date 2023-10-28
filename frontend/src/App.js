import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Example from './Example';
import Product from './Product';
import Price from './Price';
import Contact from './Contact'; // Import the Contact component

function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar />

      <div className="image-container">
        {/* Your image and text content */}
      </div>

      <div className="product-list">
        {/* Example component */}
        <Example />

        {/* Product component */}
        <Product />
      </div>

      <Price /> {/* Include the Price component here */}

      {/* Contact component for the footer */}
      <Contact />
    </div>
  );
}

export default App;
