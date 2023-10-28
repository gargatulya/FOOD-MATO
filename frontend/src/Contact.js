import React from 'react';

const Contact = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
          <div>
            <h3 className="text-xl font-semibold mb-5 pl=2px">Contact Us</h3>
            <p>Email: contact@foodmato.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Food Street, Foodville</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <p>Stay connected with us on social media:</p>
            <div className="mt-2">
              <a href="#" className="text-white hover:text-indigo-500 mr-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-indigo-500 mr-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-indigo-500 mr-2"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
            <p>Subscribe to our newsletter for updates and special offers.</p>
            <div className="mt-2">
              <input type="email" placeholder="Enter your email" className="bg-gray-900 text-white px-3 py-2 w-full rounded focus:outline-none" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
