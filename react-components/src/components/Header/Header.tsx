import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink
          className={({ isActive }) =>
            'header-nav__link' + (isActive ? ' header-nav__link_active' : '')
          }
          to="/"
        >
          Main
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            'header-nav__link' + (isActive ? ' header-nav__link_active' : '')
          }
          to="/about-us"
        >
          About Us
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
