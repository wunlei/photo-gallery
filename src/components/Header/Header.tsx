import { NavLink, useParams } from 'react-router-dom';
import './Header.scss';

function Header() {
  const params = useParams();

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
          to="/contribute"
        >
          Contribute
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            'header-nav__link' + (isActive ? ' header-nav__link_active' : '')
          }
          to="/about-us"
        >
          About Us
        </NavLink>
        {params.photoId && (
          <NavLink
            className={({ isActive }) =>
              'header-nav__link' + (isActive ? ' header-nav__link_active' : '')
            }
            to={`/photo/${params.photoId}`}
          >
            Photo
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
