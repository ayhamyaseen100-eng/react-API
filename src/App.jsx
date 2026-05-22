import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Policy from "./pages/Policy";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/recipes" element={<Recipes />} />

        <Route path="/recipe/:id" element={<RecipeDetails />} />

        <Route path="/policy" element={<Policy />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;