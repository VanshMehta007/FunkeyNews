import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Navbar = () => {
    const handleRefresh = () => {
        window.location.reload();
    };
    return (
        <>
            <nav
                className="navbar navbar-expand-lg bg-customgreen border-bottom border-body"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <span className='customLogo'>Funkey</span>
                        <span className='customLogo'>News</span>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={handleRefresh}><NavLink className="nav-link" to="/" end>Home</NavLink></li>
                            <li className="nav-item" onClick={handleRefresh}><NavLink className="nav-link" to="/business">Business</NavLink></li>
                            <li className="nav-item" onClick={handleRefresh}><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
                            <li className="nav-item" onClick={handleRefresh}><NavLink className="nav-link" to="/health">Health</NavLink></li>
                            <li className="nav-item" onClick={handleRefresh}><NavLink className="nav-link" to="/science">Science</NavLink></li>
                            <li className="nav-item" onClick={handleRefresh}><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
                            <li className="nav-item" onClick={handleRefresh}><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;