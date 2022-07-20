import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Automation from "./container/Automation";
import Monitoring from "./container/Monitoring";
import Features from "./container/Features";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab-automation/" element={<Automation />} />
        <Route path="/lab-monitoring/" element={<Monitoring />} />
        <Route path="/features/" element={<Features />} />
      </Routes>
    </Router>
  );
}

export default App;
