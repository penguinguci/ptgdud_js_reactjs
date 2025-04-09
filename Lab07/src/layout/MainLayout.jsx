import Sidebar from "../components/Sidebar";
import TopNavigation from "../components/TopNavigation";
import axios from "axios";
import { useEffect, useState } from "react";

const MainLayout = ({children}) => {

    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      const fetchAdminByRole = async () => {
        try {
          const role = "admin";
          const res = await axios.get(`http://localhost:5000/api/users/${role}`);
          const admin = res.data[0];
          setAdmin(admin);
          console.log(admin);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      }
      fetchAdminByRole();
    }, [])

    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
        </div>
      );
    }

    return (
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        <div className="hidden md:flex md:flex-shrink-0">
          <Sidebar admin={admin} />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNavigation admin={admin} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    );
}

export default MainLayout;