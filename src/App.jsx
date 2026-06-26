import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import RecipesPage from "./pages/RecipesPage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;