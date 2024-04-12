import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <h1>Header</h1>
        <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-700 underline' : ''
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-700 underline' : ''
            }
            to="/admin"
          >
            Admin
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-700 underline' : ''
            }
            to="/user"
          >
            User
          </NavLink>
      </header>
    </div>
  );
}

export default Header;
