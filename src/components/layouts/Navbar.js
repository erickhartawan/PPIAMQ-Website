/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./Navbar.sass";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md">
            <div class="container-fluid">
                <button
                    class="navbar-toggler custom-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggler"
                    aria-controls="navbarToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">
                    @PPIAMQ
                </a>
                <div
                    class="collapse navbar-collapse navbar-right"
                    id="navbarToggler"
                >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                HOME
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
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
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a class="dropdown-item" href="#">
                                    Vision and Mission
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">
                                    Committees
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">
                                    About Us
                                </a>
                            </div>

                            {/* <a class="nav-link" href="#">
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
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                STUDENT GUIDE
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                MEMBERSHIP CARD
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                EVENTS
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
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
