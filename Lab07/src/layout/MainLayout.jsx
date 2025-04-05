import Sidebar from "../components/Sidebar";
import TopNavigation from "../components/TopNavigation";

const MainLayout = ({children}) => {
    return (
      <div className="grid grid-cols-4">
        <div className="col-span-1 w-2/3">
          <Sidebar />
        </div>
        <div className="col-span-3 w-full">
          <TopNavigation />
          <div className="content">{children}</div>
        </div>
      </div>
    );
}

export default MainLayout;