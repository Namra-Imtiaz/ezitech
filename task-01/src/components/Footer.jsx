import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex flex-col space-y-2">
            <p className="text-sm">Office #304-B, Amna Plaza, Main Peshawar Rd, Rawalpindi, Punjab</p>
            <p className="text-sm">(92) 337-7777860</p>
            <p className="text-sm">info@ezitech.org</p>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Explore More</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="text-sm hover:text-blue-500">Partners</a></li>
            <li><a href="#" className="text-sm hover:text-blue-500">Portfolio</a></li>
            <li><a href="#" className="text-sm hover:text-blue-500">Careers</a></li>
            <li><a href="#" className="text-sm hover:text-blue-500">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Internships</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-blue-500">Strategy</a></li>
            <li><a href="#" className="text-sm hover:text-blue-500">eCommerce</a></li>
            <li><a href="#" className="text-sm hover:text-blue-500">Digital Marketing</a></li>
            <li><a href="#" className="text-sm hover:text-blue-500">Branding</a></li>
            <li><a href="#" className="text-sm hover:text-blue-500">Design</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Updates</h3>
          <p className="text-sm mb-2">Subscribe to our newsletter to get the latest news & updates.</p>
          <div className="flex">
            <input type="email" placeholder="Enter email address" className="border rounded px-3 py-2 text-sm mr-2 focus:outline-none focus:ring focus:ring-blue-300" />
            <button className="bg-gray-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium focus:outline-none focus:ring focus:ring-blue-300">Go</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 border-t pt-6 border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Ezitech. All rights reserved | Design & Develop by Ezitech Solutions</p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Terms & Conditions</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;