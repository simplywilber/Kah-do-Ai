import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//Pages
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
