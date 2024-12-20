import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        {/* Footer Content */}
        <p className="mb-4">© 2024 Your Website. All rights reserved.</p>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/" className="text-white hover:text-blue-400">Home</a>
          <a href="/about" className="text-white hover:text-blue-400">About Us</a>
          <a href="/contact" className="text-white hover:text-blue-400">Contact</a>
          <a href="/privacy" className="text-white hover:text-blue-400">Privacy Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" className="w-6 h-6"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" className="w-6 h-6"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" className="w-6 h-6"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
