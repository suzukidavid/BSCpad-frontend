import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Tabs from '../components/Staking/Tabs';
import Wizard from '../components/Staking/Wizard';
import StakingCard from '../components/Staking/StakingCard';
import Checkpoints from '../components/Staking/Checkpoints';
import Warning from '../components/Staking/Warning';

import { stakings } from '../assets/variables';

export default function Staking() {

    const [wizard, setWizard] = useState('stake');

    const selectWizard = tab => {
        console.log(tab);
        setWizard(tab);
    }

    return (
        <section className="staking">
            <Header />

            <div className="row" style={{ width: '98%', marginLeft: '1%' }}>
                <div className="col-12 col-md-9">
                    <Tabs selectTab={selectWizard} />

                    <Wizard wizard={wizard} />

                    {wizard !== 'unstake' && <Checkpoints />}
                    {wizard === 'unstake' && <Warning />}

                    <div className="d-flex justify-content-center my-3">
                        <button type="button" className="btn btn-warning button-small text-white mx-3" style={{ width: '100px' }}>Previous</button>
                        <button type="button" className="btn btn-warning button-small text-white mx-3" style={{ width: '100px' }}>Next</button>
                    </div>

                </div>
                <div className="col-12 col-md-3 tabs-card">
                    <StakingCard key={3} content={stakings[3]} />
                    <StakingCard key={4} content={stakings[4]} />
                    <StakingCard key={5} content={stakings[5]} />
                </div>
            </div>

            <Footer />
        </section>
    )
}