import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getRecipeDetails } from "../services/api";

function RecipeDetails() {

  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {

    const fetchRecipe = async () => {

      const data = await getRecipeDetails(id);

      setRecipe(data);
    };

    fetchRecipe();

  }, []);

  if (!recipe) {
    return <h1 className="text-center mt-20 text-3xl">Loading...</h1>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-5 py-10">

      <div className="bg-slate-800 p-8 rounded-3xl max-w-[700px] w-full">

        <img
          src={recipe.image_url}
          className="w-full h-[400px] object-cover rounded-2xl mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-300 mb-6">
          Publisher : {recipe.publisher}
        </p>

        <a href={recipe.source_url} target="_blank">

          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl duration-300">
            Full Recipe
          </button>

        </a>

      </div>

    </div>
  );
}

export default RecipeDetails;