import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const location = useLocation();
  const currentPage = location.pathname;

  const getClassNames = (path) => {
    return currentPage === path
      ? 'text-white bg-red-600 bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition duration-300'
      : 'text-gray-300 hover:text-white hover:bg-red-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition duration-300';
  };

  return (
    <nav className="bg-red-800 bg-opacity-50 backdrop-blur p-4">
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
