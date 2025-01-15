import LOGO_URL from "../utils/constants";

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Food Order App"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Partner With Us</li>
                    <li>Contact Us</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;