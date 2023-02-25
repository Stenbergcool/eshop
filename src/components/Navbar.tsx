import { Link, Route, Routes } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-white max-w-7xl border-gray-200 px-2 sm:px-4 py-2.5 z-40">
        <div className="container items-center justify-between mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex p-4 mt-4 border border-gray-100 rounded-lg b md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <Link to="/" className="text-neutral-800 "> Home</Link>
              </li>
              <li>
                <Link to="/ProductsPage" className="text-neutral-800"> Products</Link>
              </li>
              <li className="grow place-self-end justify-self-end">
                <Link to="/Cart" className="text-neutral-800"> Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;