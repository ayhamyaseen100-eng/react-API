import { useState } from "react";
import { searchRecipes } from "../services/api";

import Search from "../components/Search";
import RecipesList from "../components/RecipesList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const RecipesPage = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await searchRecipes(query);

      setRecipes(data);
      setError("");
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <Search
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      <RecipesList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;