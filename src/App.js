import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import ProjectLayout from "./layout/ProjectLayout";
import Projects from "./pages/Project";
import CustomerListLayout from "./layout/CustomerListLayout";
import CustomerList from "./pages/CustomerList";
import ContractorList from "./pages/ContractorList";
import ProjectDetailLayout from "./layout/ProjectDetailLayout";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/projects"
          element={
            <ProjectLayout>
              <Projects />
            </ProjectLayout>
          }
        />
        <Route
          path="/customer"
          element={
            <CustomerListLayout>
              <CustomerList />
            </CustomerListLayout>
          }
        />
        <Route
          path="/contractor"
          element={
            <CustomerListLayout>
              <ContractorList />
            </CustomerListLayout>
          }
        />
        <Route
          path="/project_detail"
          element={
            <ProjectDetailLayout>
              <ProjectDetail />
            </ProjectDetailLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
