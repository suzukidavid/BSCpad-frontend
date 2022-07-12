import React, { Component } from 'react';

import logo from '../assets/logo.png';
import { FaAlignJustify, ImStarEmpty, ImStarFull } from 'react-icons/all';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        isOpen: false,
        star: true,
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };

    handleStar = () => {
        this.setState({ star: !this.state.star })
    }

    render() {
        return (
            <section className="header">
                <nav className="navbar">
                    <Link to="/">
                        <img src={logo} alt="logo"></img><span>BSCPad</span>
                    </Link>
                    <div className="nav-center">
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li><Link to="/">Connect Wallet</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/staking">Staking</Link></li>
                            <li><Link to="/error">Error</Link></li>
                        </ul>
                        <ul className="nav-mobile">
                            <li>
                                <button type="button" className="nav-btn" onClick={this.handleToggle}><FaAlignJustify className="nav-icon" /></button>
                            </li>
                            {<li>{this.state.star ?
                                <button type="button" className="nav-btn" onClick={this.handleStar}>
                                    <ImStarEmpty className="nav-icon" />
                                </button>
                                : <button type="button" className="nav-btn" onClick={this.handleStar}>
                                    <ImStarFull className="nav-icon" />
                                </button>}
                            </li>}
                        </ul>
                    </div>
                </nav>
            </section>
        );
    }
}

export default Header;
