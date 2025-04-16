import logo from '../assets/chefify.png';
import check from '../assets/check.png';
import avatar from '../assets/avatar.png';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="icon" />
                </div>
                <div className="search">
                    <span className='search_icon'>
                        {/* <i className="fas fa-search"></i> */}
                    </span>
                    <input className="text-search" type="text" />
                </div>
                <div className="nav">
                    <div className="nav_link">
                        <a href="/">What to cook</a>
                    </div>
                    <div className="nav_link">
                        <a href="/">Recipes</a>
                    </div>
                    <div className="nav_link">
                        <a href="/">Ingredients</a>
                    </div>
                    <div className="nav_link">
                        <a href="/">Occasions</a>
                    </div>
                    <div className="nav_link">
                        <a href="/">About Us</a>
                    </div>
                </div>

                <button className="btn_your_recipe">
                    <img className='icon' src={check} alt="" />
                    Your Recipe Box
                </button>

                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </>
    );
}

export default Header;