import { useState } from "react";

import Search from "../components/Search";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";

import { getRecipes } from "../services/api";

function Recipes() {

  const [search, setSearch] = useState("");

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {

    setLoading(true);

    const data = await getRecipes(search);

    setRecipes(data);

    setLoading(false);
  };

  return (
    <div className="min-h-screen px-10 py-10">

      <Search
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSearch={handleSearch}
      />

      {loading && <Loader />}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe_id}
            recipe={recipe}
          />
        ))}

      </div>

    </div>
  );
}

export default Recipes;