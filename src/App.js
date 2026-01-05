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
import DisputeList from "./pages/Others/dispute/DisputeList";
import ServiceList from "./pages/Others/services/ServiceList";
import CreateService from "./pages/Others/services/CreateService";
import LicenseVerificationDetail from "./pages/licenseVerification/LicenseVerificationDetail";
import Offer from "./pages/offers/Offer";
import PlatformSuspension from "./pages/platformSuspension/PlatformSuspension";
import Dashboard from "./pages/dashboard/Dashboard";
import TemplateList from "./pages/templates/TemplateList";
import CreateTemplate from "./pages/templates/CreateTemplate";
import PlatformFee from "./pages/revenue/PlatformFee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicAuth />}>
          <Route path="/" element={<Login />} />
        </Route>
        {/* protected routes */}
        <Route element={<Auth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/contractors" element={<ContractorList />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/transaction_history" element={<TransactionHistory />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/license_verification" element={<LicenseVerification />} />
          <Route path="/license_verification_detail" element={<LicenseVerificationDetail />} />
          <Route path="/contractor-profile" element={<ContractorProfile />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          <Route path="/messages" element={<ChatMessages />} />
          <Route path="/dispute" element={<DisputeList />} />
          <Route path="/service_list" element={<ServiceList />} />
          <Route path="/create_service" element={<CreateService />} />
          <Route path="/template_list" element={<TemplateList />} />
          <Route path="/create_template" element={<CreateTemplate />} />
          <Route path="/platform_fee" element={<PlatformFee/>} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/platform_suspension" element={<PlatformSuspension/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
