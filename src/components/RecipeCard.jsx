import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300">

      <img
        src={recipe.image_url}
        className="w-full h-[250px] object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold mb-4">
          {recipe.title}
        </h2>

        <Link to={`/recipe/${recipe.recipe_id}`}>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg duration-300">
            Details
          </button>

        </Link>

      </div>
    </div>
  );
}

export default RecipeCard;