import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from "../src/pages/Portfolio";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
