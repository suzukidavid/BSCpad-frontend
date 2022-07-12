import React, { Component } from 'react';

import aboutus from '../../assets/img/aboutus.png';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container aboutus">
                <h2 className="col-12 text-center font-weight-bold text-white hero-title">About Us</h2>
                <div className="row">
                    <div className="col-md-6 mx-3 mx-md-0">
                        <p className="hero-description font-weight-bold">WHAT IS BSCPAD?</p>
                        <p className="hero-description text-white font-weight-bold">The BSC Launch Pad is the first decentralized IDO platform for the Binance Smart Chain Network.</p>
                        <p className="hero-description">BSCPad will empower crypto currency projects with the ability to distribute tokens and raise liquidity.</p><br />

                        <p className="hero-description font-weight-bold">WHY CHOOSE US?</p>
                        <p className="hero-description text-white font-weight-bold">BSCPad has found a solution to incentivize and reward all token holders in a way that is inclusive and with a low barrier to entry.</p>
                        <p className="hero-description">The fundamental flaws of existing launchpads is that acquiring enough tokens to participate in the ecosystem is prohibitive, and even if you do hold the tokens, you are not guaranteed an allocation spot. They are based on a first come first serve basis where automated bots can fill the whitelist spots in a matter of seconds. BSCPad is creating fair decentralized launches.</p>

                        <p className="hero-description">The hallmark of the BSCPad is a two-round system that makes every tier level guaranteed an allocation. There is no luck, and no lotteries, and no bots; only fair distributed rewards for all participants.</p>
                    </div>
                    <div className="col-md-6 mx-3 mx-md-0 text-center rotation-container">
                        <div className="rotation"></div>
                        <img src={aboutus} alt="about us" />
                    </div>
                </div>
            </div >
        );
    }
}
