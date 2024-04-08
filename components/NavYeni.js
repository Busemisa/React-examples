import React from 'react';
import { Link } from 'react-router-dom'; // Eğer sayfalar arası gezinme yapacaksanız

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyWebsite
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hakkimizda" className="nav-links">
              Hakkımızda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/iletisim" className="nav-links">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavYeni;
