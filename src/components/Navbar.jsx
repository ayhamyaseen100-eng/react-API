import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-900 shadow-lg">

      <h1 className="text-2xl font-bold text-cyan-400">
        Food App
      </h1>

      <div className="flex gap-6 text-lg">

        <Link to="/" className="hover:text-cyan-400 duration-300">
          Home
        </Link>

        <Link to="/recipes" className="hover:text-cyan-400 duration-300">
          Recipes
        </Link>

        <Link to="/policy" className="hover:text-cyan-400 duration-300">
          Policy
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;