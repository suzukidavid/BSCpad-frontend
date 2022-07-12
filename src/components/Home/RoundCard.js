import React from 'react';

import PropTypes from 'prop-types';

export default function RoundCard({ round }) {
    return (
        <section className="round-card">
            <div className="round-card-header"> {round.name} </div>
            <hr />
            <div className="round-card-body">
                <p className="hero-description mb-1">Staking Requirement</p>
                <h2 className="text-white">{round.requirement}</h2>

                <p className="hero-description mb-1">Staking Length Required</p>
                <h5 className="text-white">{round.length}</h5>

                <p className="hero-description mb-1">Whitelist Requirement Twitter</p>
                <h5 className="text-white">{round.whitelist}</h5>

                <p className="hero-description mb-1">Guaranteed Allocation</p>
                <h5 className="text-white">{round.allocation}</h5>

                <p className="hero-description mb-1">Pool Weight</p>
                <h5 className="text-white">{round.pool_weight}</h5>
            </div>
            <hr />
            <div className="round-card-footer">
                <button type="button" className="btn btn-warning button-large">Learn More</button>
            </div>
        </section>
    );
}

RoundCard.propTypes = {
    round: PropTypes.object.isRequired,
}
