import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
  { name: "Home", path: "/" },
  { name: "Top", path: "/movies/top" },
  { name: "Popular", path: "/movies/popular" },
  { name: "Upcoming", path: "/movies/upcoming" },
];

const getIndicatorPosition = () => {
  switch (location.pathname) {
    case "/":
      return "translate-x-[16px]";
    case "/movies/top":
      return "translate-x-[128px]";
    case "/movies/popular":
      return "translate-x-[240px]";
    case "/movies/upcoming":
      return "translate-x-[352px]";
    default:
      return "translate-x-[16px]";
  }
};

  const activeClass = "block cursor-pointer w-24 px-3 py-1.5 text-center font-semibold text-[#FF4B33] rounded-xl md:text-[#FF4B33]";
  const inActiveClass = "block cursor-pointer w-24 px-3 py-1.5 text-center font-semibold text-heading md:border-0";

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`search?query=${queryTerm}`);
  };

  return (
    <header className="bg-neutral-primary w-full border-b border-black md:border-black">
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
              className="md:hidden p-2 w-10 h-10 flex items-center justify-center hover:bg-neutral-secondary-soft hover:text-heading focus:text-[#FF4B33]">
              <span className="sr-only">Open Main menu</span>
              <svg
                className="w-6 h-6 text-[#FF4B33] rounded-3xl"
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

          <div className={`flex flex-col md:flex-row md:items-center items-center md:space-x-6 w-full md:w-auto h-auto ${isOpen ? "block" : "hidden md:flex"} md:mt-0`}>

            <ul className="relative flex flex-col md:flex-row md:space-x-4 mt-8 mb-3 items-center w-56 md:w-auto md:mt-0 md:mb-0 border border-[#ff5703] md:border-0 rounded-2xl bg-neutral-secondary-soft md:bg-neutral-primary p-4 md:p-0">
              <span className={` hidden sm:block absolute bottom-0 h-[2px] w-24 bg-gradient-to-r from-white via-[#FF4B33] to-white transition-all duration-300 ${getIndicatorPosition()}`}/>
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
            <form onSubmit={handleSubmit} className="w-full md:w-auto mt-6 md:mt-0 md:ml-4">
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-black"
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
                  className="block w-full px-3 py-1.5 ps-9 pe-3 rounded-xl border border-black focus:ring-2 focus:ring-[#FF4B33] focus:border-none focus:outline-none rounded-2xl p-1 shadow-xs placeholder:text-body"
                />
              </div>
            </form>
        </div>
      </div>
    </header>
  );
};

export default Header;