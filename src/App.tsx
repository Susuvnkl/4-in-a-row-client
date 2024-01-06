import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import HomePage from "./components/HomePage/HomePage";
import CreateGamePage from "./components/CreateGamePage/CreateGamePage";
import JoinGamePage from "./components/JoinGamePage/JoinGamePage";
import GamePage from "./components/GamePage/GamePage";
import ScoresPage from "./components/ScoresPage/ScoresPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignUpPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/CreateGamePage" element={<CreateGamePage />} />
        <Route path="/JoinGamePage" element={<JoinGamePage />} />
        <Route path="/gamePage" element={<GamePage />} />
        <Route path="/scoresPage" element={<ScoresPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
