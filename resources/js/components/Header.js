import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
        <div>

            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <Link to="/task/createTask" class="nav-link" >
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                User
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">

                                    <Link to="/add-user" class="nav-link">User</Link>
                                    <Link to="/all-user" class="nav-link">All User</Link>
                                </nav>
                            </div>

                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">

                                    <Link to="/add-contact" class="nav-link">Employee</Link>

                                </nav>
                            </div>

                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Company
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>

                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <Link to='/manage-project' class="nav-link">
                                        All Project
                                        <div class="sb-sidenav-collapse-arrow"></div>
                                    </Link>

                                    <Link to='/manage-company' class="nav-link">
                                        Add New Company

                                    </Link>

                                </nav>
                            </div>
                            <div class="sb-sidenav-menu-heading">Addons</div>
                            <Link to='/report' class="nav-link" >
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Report
                            </Link>

                            <Link to='/add-ticket'class="nav-link" >
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Ticket
                            </Link>


                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="large">Logged in as:</div>
                        ABHI CHOWDHURY
                    </div>
                </nav>
            </div>
        </div>
        )
    }
}

export default Header;
