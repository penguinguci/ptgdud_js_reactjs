import Sidebar from "../components/Sidebar";
import TopNavigation from "../components/TopNavigation";

const MainLayout = ({children}) => {
    return (
      <div>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <TopNavigation />
            <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
              {children}
            </main>
          </div>
        </div>
      </div>
    );
}

export default MainLayout;