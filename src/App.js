import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Projects from "./pages/project/Project";
import CustomerList from "./pages/customer/CustomerList";
import ContractorList from "./pages/contractor/ContractorList";
import ProjectDetail from "./pages/project/ProjectDetail";
import Auth from './services/Auth';
import PublicAuth from "./services/PublicAuth";
import TransactionHistory from "./pages/revenue/TransactionHistory";
import Earning from "./pages/revenue/Earning";
import LicenseVerification from "./pages/licenseVerification/LicenseVerification";
import ContractorProfile from "./pages/contractor/ContractorProfile";
import ChatMessages from "./pages/messages/ChatMessages";
import CustomerProfile from "./pages/customer/CustomerProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicAuth />}>
          <Route path="/" element={<Login />} />
        </Route>
        {/* protected routes */}
        <Route element={<Auth />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/contractors" element={<ContractorList />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/transaction_history" element={<TransactionHistory />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/license_verification" element={<LicenseVerification />} />
          <Route path="/contractor_profile" element={<ContractorProfile />} />
          <Route path="/customer_profile" element={<CustomerProfile />} />
          <Route path="/messages" element={<ChatMessages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
