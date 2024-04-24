import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-side text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 md:ml-16 lg:grid-cols-4 gap-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Flex.IT</h2>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul>
              <li>
                <a href="/">Web Design</a>
              </li>
              <li>
                <a href="/">Graphic Design</a>
              </li>
              <li>
                <a href="/">SEO</a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Portfolio</h2>
            <ul>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Case Studies</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Kigali City</p>
            <p>Email: anneuhiriwe@gmail.com</p>
            <p>Phone: +250 786021869</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
