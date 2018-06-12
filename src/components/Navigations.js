import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Medsos</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className=""><NavLink to="/">Home</NavLink></li>
                        <li className=""><NavLink to="/contact">Contact</NavLink></li>
                        <li className=""><NavLink to="/posts">Post</NavLink></li>    
                    </ul>
                </div>
            </div>
            
        </nav>
    );
}

export default Navigations;