import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        
        <span className="text-sm text-body">
        © 2026 
        <a href="/" className="hover:underline ms-1">CineTym™</a>. 
        All Rights Reserved.
        </span>

        <ul className="flex flex-wrap justify-center gap-4 mt-3 text-sm font-medium text-body md:mt-0">
        <li>
            <NavLink to="#" className="hover:underline">About</NavLink>
        </li>
        <li>
            <NavLink to="https://www.youtube.com" className="hover:underline">Youtube</NavLink>
        </li>
        <li>
            <NavLink to="https://www.instagram.com" className="hover:underline">Instagram</NavLink>
        </li>
        <li>
            <NavLink to="https://x.com" className="hover:underline">X</NavLink>
        </li>
        </ul>

    </div>
    </footer>
)
}

export default Footer
