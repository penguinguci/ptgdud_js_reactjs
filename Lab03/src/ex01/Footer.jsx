import chefify from '../assets/chefifywhite.png';

const Footer = () => {
    return (
        <>
            <div className="footer">
            <div className="left">
                <div className="top">
                    <h3>About Us</h3>
                    <p className="para">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className="input_email">
                        <input className="email" type="text" />
                        <button className="send">Send</button>
                    </div>
                </div>
                <div className="bottom">
                    <img src={chefify} alt="" />
                    <p className='text'>2023 Chefify Company</p>
                    <p className='text'>Terms of Service| Privacy Policy</p>
                </div>
            </div>
            <div className="right">
                <div className="right_1">
                    <div className="learn">
                        <h3>Learn More</h3>
                        <div className="nav_learn">
                            <a href="/">Our Cooks</a>
                            <a href="/">Our Cooks</a>
                            <a href="/">Our Cooks</a>
                        </div>
                    </div>
                    <div className="shop">
                        <h3>Shop</h3>
                        <div className="nav_learn">
                            <a href="/">Our Cooks</a>
                            <a href="/">Our Cooks</a>
                        </div>
                    </div>
                </div>

                <div className="right_2">
                    <h3>Recipes</h3>
                    <div className="nav_learn">
                        <a href="/">Our Cooks</a>
                        <a href="/">Our Cooks</a>
                        <a href="/">Our Cooks</a>
                        <a href="/">Our Cooks</a>
                        <a href="/">Our Cooks</a>
                        <a href="/">Our Cooks</a>
                        <a href="/">Our Cooks</a>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Footer;  