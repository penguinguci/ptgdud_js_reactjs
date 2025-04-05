import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App
