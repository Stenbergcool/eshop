import { Link, Route, Routes } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="text-white"> Home</Link>
              </li>
              <li>
                <Link to="/ProductsPage" className="text-white"> Products</Link>
              </li>
              <li className="float-right">
                <Link to="/Cart" className="text-white"> Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;