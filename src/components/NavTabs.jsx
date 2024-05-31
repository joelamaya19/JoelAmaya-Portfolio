import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const location = useLocation();
  const currentPage = location.pathname;

  const getClassNames = (path) => {
    return currentPage === path
      ? 'text-white bg-blue-600 px-3 py-2 rounded-md text-sm font-medium'
      : 'text-gray-300 hover:text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium';
  };

  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="/" className={getClassNames('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className={getClassNames('/About')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Projects" className={getClassNames('/Projects')}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Contact" className={getClassNames('/Contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
