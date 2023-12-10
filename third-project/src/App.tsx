import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import StartScreen from "./pages/StartScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
