import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300"
    >
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="font-bold text-xl mb-3">
          {recipe.title}
        </h2>

        <p className="text-gray-500 mb-4">
          {recipe.publisher}
        </p>

        <Link
          to={`/recipe/${recipe.id}`}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;