import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-earth-medium text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Royal Legacy</h1>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex space-x-6">
          {['/', '/about', '/services', '/appointments', '/speaking'].map((path, idx) => {
            const labels = ['Home', 'About Me', 'Services', 'Appointment Scheduling', 'Speaking Engagements'];
            return (
              <Link
                key={path}
                to={path}
                className="relative group transition duration-300"
              >
                <span className="group-hover:text-yellow-300 transition-colors duration-300">{labels[idx]}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-earth-clay px-4 py-2 space-y-2">
          {['/', '/about', '/services', '/appointments', '/speaking'].map((path, idx) => {
            const labels = ['Home', 'About Me', 'Services', 'Appointment Scheduling', 'Speaking Engagements'];
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className="block transition duration-300 hover:text-yellow-300"
              >
                {labels[idx]}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
