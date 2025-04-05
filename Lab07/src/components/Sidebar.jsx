import logo from '/logo.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {



    return (
      <div className="sidebar h-screen bg-violet-400">
        <Link className="logo flex items-center gap-2 p-4" to="/dashboard">
          <img src={logo} alt="logo" />
          <h1 className="title text-lg text-white font-bold">Admin Funny</h1>
        </Link>
        <div className="menu">
            <ul>

            </ul>
        </div>
      </div>
    );
}

export default Sidebar;