import React, { Component } from 'react';

import img from '../../assets/img/round2.png';

export default class Round2 extends Component {
    render() {
        return (
            <div className="container round">
                <h2 className="col-12 text-center font-weight-bold round-title">ROUND 2 - FCFS ROUND</h2>
                <div className="row">
                    <div className="col-md-6 mx-3 mx-md-0 text-center">
                        <img src={img} alt="network" />
                    </div>
                    <div className="col-md-6 mx-3 mx-md-0">
                        <p className="hero-description">In round 2, the unsold tokens from the first round are made available. All tiered members can purchase an additional amount that is determined by a tier-based formula. The second round buying window opens at the same time for all members, regardless of tier level. This round is open until all tokens are sold, typically lasting for only a few minutes. After all the tokens are sold, the IDO is concluded.</p>

                        <p className="hero-description font-weight-bold">WE WILL BE COLLECTING BOTH DATA AND FEEDBACK ON THE IDO STRUCTURE IN ORDER TO OPTIMIZE THE SYSTEM OVER TIME AS WELL AS TAKING INTO CONSIDERATION COMMUNITY FEEDBACK AND POTENTIAL DAO PROPOSALS.</p>

                        <p className="hero-description">Our system is a predictable and provably fair system giving our users the proper incentives to accumulate and hold tokens and support each and every project launched. Over time, we will tweak weights, add new tiers and change other parameters as necessary to keep the system functional, competitive and rewarding for all community members.</p>

                        <p className="hero-description">$BSCPAD is the next evolution of blockchain launchpads solving the fundamental flaws that plague existing launchpads. This platform benefits all holders of the token and allows for fair launches giving traders of all sizes the opportunity to invest in the best upcoming Binance Smart Chain projects.</p>
                    </div>
                </div>
            </div >
        );
    }
}
