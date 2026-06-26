import RecipeCard from "./RecipeCard";

const RecipesList = ({ recipes }) => {
  return (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </div>
  );
};

export default RecipesList;