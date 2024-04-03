import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearningPaths from "./pages/LearningPaths";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/LearningPaths"
        element={<LearningPaths />}
      />
    </Routes>
  );
}

export default App;
