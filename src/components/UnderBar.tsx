import { Link, Route, Routes } from 'react-router-dom'

function Underbar(props) {
  let categoryBox = []
  for(let item of props.categories){
    categoryBox.push(<li className="text-sm text-neutral-800" onClick={(e) => {props.setCategory(item)}}> {item}</li>)
  }
    return (
        <nav className="bg-white border-gray-100 px-2 sm:px-4 py-2 dark:bg-slate-300">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-2 mt-2 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li className="text-sm text-neutral-800" onClick={(e) => {props.setCategory("all")}}> All</li>
              {categoryBox}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Underbar;