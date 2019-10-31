import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import s from './Navbar.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <MDBNavbar color="default-color" dark expand="md" className={s.nav}>
                <MDBNavbarBrand>
                    <MDBNavLink to="/"><strong className="white-text"><FontAwesomeIcon icon={faLanguage} /></strong></MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem active className={`${s.item} ${s.navbar} ${s.active}`}>
                            <MDBNavLink to="/profile">Profile <FontAwesomeIcon icon={faCoffee} /></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active className={s.item}>
                            <MDBNavLink to="/dialogs">Message <FontAwesomeIcon icon={faComments} /></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active className={s.item}>
                            <MDBNavLink to="/news">News <FontAwesomeIcon icon={faNewspaper} /></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active className={s.item}>
                            <MDBNavLink to="/music">Music <FontAwesomeIcon icon={faMusic} /></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active className={s.item}>
                            <MDBNavLink to="/settings">Settings <FontAwesomeIcon icon={faCogs} /></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav left>
                        <MDBNavItem active className={`${s.item} ${s.navbar} ${s.active}`}>
                            <MDBNavLink to="/profile">FRIENDS <FontAwesomeIcon icon={faCoffee} /></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Navbar;



