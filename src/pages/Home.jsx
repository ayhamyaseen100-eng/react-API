import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-red-500"
    >
      <div className="text-center text-white">

        <h1 className="text-7xl font-bold mb-6">
          Forkify Recipes
        </h1>

        <p className="text-2xl mb-8">
          Discover thousands of recipes
        </p>

        <Link
          to="/recipes"
          className="bg-white text-orange-500 px-8 py-4 rounded-xl font-bold"
        >
          Explore Recipes
        </Link>
      </div>
    </div>
  );
};

export default Home;