import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App
