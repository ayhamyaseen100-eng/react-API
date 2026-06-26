import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getRecipeById } from "../services/api";

const Details = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeById(id);
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <h1 className="text-center mt-20">Loading...</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full h-[500px] object-cover rounded-3xl"
      />

      <h1 className="text-5xl font-bold mt-8">
        {recipe.title}
      </h1>

      <p className="mt-4 text-xl text-gray-500">
        {recipe.publisher}
      </p>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-5">
          Ingredients
        </h2>

        {recipe.ingredients.map((item, index) => (
          <p key={index}>
            • {item.quantity} {item.unit} {item.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Details;