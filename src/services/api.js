const API_URL = "https://forkify-api.jonas.io/api/v2/recipes";

export const searchRecipes = async (query) => {
  const res = await fetch(`${API_URL}?search=${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await res.json();
  return data.data.recipes;
};

export const getRecipeById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Recipe not found");
  }

  const data = await res.json();
  return data.data.recipe;
};