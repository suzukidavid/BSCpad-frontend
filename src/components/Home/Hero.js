import React, { Component } from 'react';

import { FaTelegramPlane, FaMediumM, FaTwitter } from 'react-icons/all';

import pancake_swap from '../../assets/img/pancake-swap.png';
import partner_0 from '../../assets/img/partner_0.svg';
import partner_1 from '../../assets/img/partner_1.png';
import partner_2 from '../../assets/img/partner_2.png';

export default class Hero extends Component {
    render() {
        return (
            <div className="container hero">
                <h2 className="text-center font-weight-bold text-white hero-title">BSCPAD IS THE FIRST DECENTRALIZED IDO PLATFORM FOR THE BINANCE SMART CHAIN NETWORK.</h2>
                <p className="text-center hero-description">BSCPad will empower crypto currency projects with the ability to distribute tokens and raise liquidity.</p>
                <div className="buttons">
                    <button type="button" className="btn btn-warning button-large">View All Projects</button>
                    <button type="button" className="btn btn-primary button-large">Buy On <img src={pancake_swap} alt="pancake swap"></img> Pancake Swap</button>
                    <button type="button" className="btn btn-success button-large">Apply For IDO</button>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-warning button-small"><FaTelegramPlane />Join us on Telegram</button>
                    <button type="button" className="btn btn-outline-warning button-small"><FaMediumM />Follow our Medium</button>
                    <button type="button" className="btn btn-outline-warning button-small"><FaTwitter />Follow our Twitter</button>
                </div>
                <div className="buttons">
                    <h6>OUR PARTNERS</h6>
                    <a href="https://www.google.com"><img src={partner_0} style={{ height: '46px' }} alt="chainlink" /></a>
                    <a href="https://www.google.com"><img src={partner_1} style={{ height: '46px' }} alt="ferrum network" /></a>
                    <a href="https://www.google.com"><img src={partner_2} style={{ height: '46px' }} alt="bondly" /></a>
                </div>
            </div>
        );
    }
}
