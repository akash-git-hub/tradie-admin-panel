import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./admin/pages/Login";
import ProjectLayout from "./admin/layout/ProjectLayout";
import Projects from "./admin/pages/Project";
import CustomerListLayout from "./admin/layout/CustomerListLayout";
import CustomerList from "./admin/pages/CustomerList";
import ContractorList from "./admin/pages/ContractorList";
import ProjectDetailLayout from "./admin/layout/ProjectDetailLayout";
import ProjectDetail from "./admin/pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
