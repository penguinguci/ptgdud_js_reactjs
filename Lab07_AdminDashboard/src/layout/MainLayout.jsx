import Sidebar from "../components/Sidebar";
import TopNavigation from "../components/TopNavigation";
const MainLayout = ({children}) => {

    return (
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        <div className="hidden md:flex md:flex-shrink-0">
          <Sidebar/>
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNavigation/>
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    );
}

export default MainLayout;