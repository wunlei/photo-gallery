import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Main</Link>
        <Link to="/about-us">About</Link>
      </nav>
    </header>
  );
}

export default Header;
