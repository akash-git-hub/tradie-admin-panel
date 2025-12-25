import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Projects from "./pages/Project";
import CustomerList from "./pages/CustomerList";
import ContractorList from "./pages/ContractorList";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/projects"
          element={
            <Projects />
          }
        />
        <Route
          path="/customer"
          element={
            <CustomerList />
          }
        />
        <Route
          path="/contractor"
          element={
            <ContractorList />
          }
        />
        <Route
          path="/project_detail"
          element={
            <ProjectDetail />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
