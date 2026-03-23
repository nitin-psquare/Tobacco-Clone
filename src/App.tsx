import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import "./App.css"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
