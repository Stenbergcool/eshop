import { Link, Route, Routes } from 'react-router-dom'

function Underbar(props) {
  let categoryBox = []
  for(let item of props.categories){
    categoryBox.push(<li className="text-sm text-white" onClick={(e) => {console.log("hello")}}> {item}</li>)
  }
    return (
        <nav className="bg-white border-gray-100 px-2 sm:px-4 py-2 rounded dark:bg-gray-400">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-2 mt-2 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              {categoryBox}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Underbar;