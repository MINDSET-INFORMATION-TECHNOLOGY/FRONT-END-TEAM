import Studentdashboard from "./student components/studentdashboard";
import EducatorDashboard from "./educator dashboard/educatorDashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/educatordashboard" />} />
        <Route path="/educatordashboard" element={<EducatorDashboard />} />
        <Route path="/studentdashboard" element={<Studentdashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
