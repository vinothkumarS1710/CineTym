import { Link } from "react-router-dom";
import PNF from "../assets/404.jfif";

const PageNotFound = () => {
  return (
    <main className = "flex justify-center items-center">
      <section className = "text-center">
        <img src={PNF} alt="" className="max-w-md h-72"/>
        <Link to="/">
        <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Go back to home</button>
        </Link>
      </section>
    </main>
  )
}

export default PageNotFound
