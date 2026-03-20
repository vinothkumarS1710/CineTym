import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const activeClass = "block w-24 text-center text-white bg-red-400 rounded-xl md:bg-red-400 md:text-white md:py-1";
  const inActiveClass  = "block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:py-1 md:dark:hover:bg-transparent";

  const handleSubmit = (e) => {
      e.preventDefault();
      const queryTerm = e.target.search.value;
      e.target.reset();
      return navigate(`search?query=${queryTerm}`)
  }

  return (
    <header>
      <nav className="bg-neutral-primary w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-7" alt="CineTym Logo" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              CineTym
            </span>
          </NavLink>
          <div className="flex items-center gap-40 mt-4 md:order-2">
            <label htmlFor="input-group-1" className="sr-only"></label>
            <div className="relative md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="input-group-1"
                  className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body"
                  placeholder="Search"
                  name="search"
                />
              </form>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}
            id="navbar-search"
          >
            <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                  aria-current="page"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/top"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Top
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/popular"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/upcoming"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header
