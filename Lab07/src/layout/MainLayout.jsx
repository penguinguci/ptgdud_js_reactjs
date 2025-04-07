import Sidebar from "../components/Sidebar";
import TopNavigation from "../components/TopNavigation";
import axios from "axios";
import { useEffect, useState } from "react";

const MainLayout = ({children}) => {

    const [admin, setAdmin] = useState(null);
    
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

    return (
      <div className="grid grid-cols-6">
        <div className="col-span-1 ">
          <Sidebar admin={admin} />
        </div>
        <div className="col-span-5">
          <TopNavigation admin={admin} />
          <div className="content">{children}</div>
        </div>
      </div>
    );
}

export default MainLayout;