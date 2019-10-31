import React from 'react';
import './Header.module.css';
import s from './Header.module.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

const Header = () => {
    return(
            <header className={s.header}>
                {/*When using Webpack you need to require images in order for Webpack to process them, which would explain why external images load while internal do not, so instead of <img src={"/images/resto.png"} /> you need to use <img src={require('/images/image-name.png')} />
            Source:  https://stackoverflow.com/questions/34582405/react-wont-load-local-images*/}

                <div className="d-flex navbar-right">
                    <img src={require('./../../logo.png')} alt='avatar' />
                    <div className="p-2 nav-icon-lg dark-gold">
                        <a className="nav-icon" href="/"><em className="fa fa-home"></em>
                            <span>This</span>
                        </a>
                    </div>
                    <div className="p-2 nav-icon-lg dark-gold">
                        <a className="nav-icon" href="/"><em className="fa fa-crosshairs"></em>
                            <span>Could</span>
                        </a>
                    </div>
                    <div className="p-2 nav-icon-lg dark-gold">
                        <a className="nav-icon" href="/"><em className="fab fa-instagram"></em>
                            <span>Be</span>
                        </a>
                    </div>
                    <div className="p-2 nav-icon-lg dark-gold">
                        <a className="nav-icon" href="/"><em className="fa fa-align-left"></em>
                            <span>Another</span>
                        </a>
                    </div>
                    <div className="p-2 nav-icon-lg dark-gold">
                        <a className="nav-icon" href="/"><em className="fa fa-user"></em>
                            <span>Menu</span>
                        </a>
                    </div>
                </div>
            </header>
    )
};

export default Header;