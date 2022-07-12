import React, { Component } from 'react';

import Round1 from './Round1';
import Round2 from './Round2';

export default class System extends Component {
    render() {
        return (
            <div className="container system">
                <h2 className="col-12 text-center font-weight-bold text-white hero-title">The BSCPad Tiered System</h2>
                <p className="hero-description text-center">BSCPad will showcase a fixed tier system based on the number of tokens held.</p>

                <Round1 />
                <Round2 />
            </div >
        );
    }
}
