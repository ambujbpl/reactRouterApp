import React from 'react';
import { Link , NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) =>{
    setTimeout(() => {
        props.history.push('/about');
    },10000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <span className="brand-logo">React Routers Example</span>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/axios">AxiosApp</NavLink></li>
                    <li><NavLink to="/axiosNew">AxiosAppNew</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);