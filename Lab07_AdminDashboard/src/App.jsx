import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Analytic from "./pages/Analytic";
import Message from "./pages/Message";
import Integration from "./pages/Integration";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/teams" element={<Team />} />
            <Route path="/analytics" element={<Analytic />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/integrations" element={<Integration />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
