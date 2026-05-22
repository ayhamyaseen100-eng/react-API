export const getRecipes = async (query) => {
  try {

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );

    const data = await response.json();

    return data.recipes;

  } catch (error) {
    console.log(error);
  }
};

export const getRecipeDetails = async (id) => {
  try {

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );

    const data = await response.json();

    return data.recipe;

  } catch (error) {
    console.log(error);
  }
};