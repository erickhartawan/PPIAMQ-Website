/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./Navbar.sass";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <button
                    className="navbar-toggler custom-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggler"
                    aria-controls="navbarToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    @PPIAMQ
                </a>
                <div
                    className="collapse navbar-collapse navbar-right"
                    id="navbarToggler"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="#"
                            >
                                HOME
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                ABOUT US
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a className="dropdown-item" href="#">
                                    Vision and Mission
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    Committees
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    About Us
                                </a>
                            </div>

                            {/* <a className="nav-link" href="#">
                                ABOUT US
                            </a>
                            <a href="" className="nav-link">
                                VISION AND MISSION
                            </a>
                            <a href="" className="nav-link">
                                COMMITTEES
                            </a>
                            <a href="" className="nav-link">
                                ABOUT US
                            </a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                STUDENT GUIDE
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                MEMBERSHIP CARD
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                EVENTS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                SOUNDQURIANG
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
