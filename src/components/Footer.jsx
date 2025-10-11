import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-earth-dark text-white text-center py-6 flex flex-col items-center space-y-3">
      <div className="flex space-x-6">
        <a
          href="https://linkedin.com/in/royallegacyfa/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 hover:text-earth-clay"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://instagram.com/royallegacyfa/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 hover:text-earth-clay"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://facebook.com/royallegacyfa"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 hover:text-earth-clay"
          aria-label="Facebook"
        >
          <FaFacebook size={24} />
        </a>
      </div>

      <p className="text-sm">
        &copy; {new Date().getFullYear()} Royal Legacy Financial Advisors. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
