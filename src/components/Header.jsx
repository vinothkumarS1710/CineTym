import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const activeClass = "block w-24 py-2 px-3 text-center font-semibold text-white bg-red-400 rounded-lg md:bg-red-400 md:text-white";
  const inActiveClass = "block w-24 py-2 px-3 text-center font-semibold text-heading rounded-lg bg-neutral-tertiary md:border-0 md:text-fg-brand";

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`search?query=${queryTerm}`);
  };

  return (
    <header className="bg-neutral-primary w-full border-b border-default">
      <div className="mx-auto px-4 py-5 max-w-screen-xl">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

          <div className="flex items-center justify-between w-full md:w-auto">
            <NavLink
              to="/"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <img src={Logo} className="h-10" alt="CineTym Logo" />
              <span className="self-center text-2xl text-heading font-semibold whitespace-nowrap">
                CineTym
              </span>
            </NavLink>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 w-10 h-10 flex items-center justify-center rounded-base hover:bg-neutral-secondary-soft hover:text-heading focus:text-red-300"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className={`flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-auto ${isOpen ? "block" : "hidden md:flex"} mt-3 md:mt-0`}>

            <ul className="flex flex-col md:flex-row md:space-x-4 items-center w-full md:w-auto border md:border-0 rounded-base bg-neutral-secondary-soft md:bg-neutral-primary p-4 md:p-0">
              <li>
                <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inActiveClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
                  Top
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
                  Upcoming
                </NavLink>
              </li>
            </ul>

          </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto mt-3 md:mt-0 md:ml-4">
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-body"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Search a movie"
                  className="block w-full px-3 py-2.5 ps-9 pe-3 mt-4 rounded-md border border-red-400 text-heading text-sm focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                />
              </div>
            </form>
        </div>
      </div>
    </header>
  );
};

export default Header;