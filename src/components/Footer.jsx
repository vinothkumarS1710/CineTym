import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center text-center md:flex-row md:justify-center md:text-left">
        
        <span className="text-sm text-body">
        © 2026 
        <a href="/" className="hover:underline ms-1">CineTym™</a>. 
        All Rights Reserved.
        </span>

        

    </div>
    </footer>
)
}

export default Footer
