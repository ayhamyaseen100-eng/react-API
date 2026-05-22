import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-5">

      <h1 className="text-6xl font-bold mb-6 text-cyan-400">
        Welcome To Food App
      </h1>

      <p className="max-w-[700px] text-gray-300 text-xl leading-9 mb-8">
        Search for thousands of delicious recipes and discover amazing meals from all around the world.
      </p>

      <Link to="/recipes">
        <button className="bg-cyan-100 border border-amber-400 hover:bg-cyan-600 px-8 py-3 rounded-xl text-lg duration-300">
          Explore Recipes
        </button>
      </Link>

    </div>
  );
}

export default Home;