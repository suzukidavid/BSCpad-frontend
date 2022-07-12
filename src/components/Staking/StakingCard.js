import React from 'react';

import PropTypes from 'prop-types';

export default function StakingCard({ content }) {
    return (
        <section className="round-card" style={{ marginBottom: `${['Stacked', 'Unstacked', 'Rewards'].includes(content.name) ? '30px' : undefined}` }}>
            <div className="round-card-header">{content.name}</div>
            <hr />
            <div className="round-card-body">
                <p className="hero-description mb-1">
                    {content.value}
                    {content.name === 'APY' && '%'}
                </p>
                {content.name === 'Rewards' && <div className="d-flex justify-content-around">
                    <button type="button" className="btn btn-warning button-small text-white" style={{ width: '40%' }}>Stake</button>
                    <button type="button" className="btn btn-warning button-small text-white" style={{ width: '40%' }}>Withdraw</button>
                </div>}
            </div >
        </section >
    );
}

StakingCard.propTypes = {
    content: PropTypes.object.isRequired,
}
