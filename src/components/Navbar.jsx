import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <Link
          to="/"
          className="text-3xl font-bold text-orange-500"
        >
          Forkify
        </Link>

        <div className="space-x-6">
          <Link
            to="/"
            className="font-semibold hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            to="/recipes"
            className="font-semibold hover:text-orange-500"
          >
            Recipes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;