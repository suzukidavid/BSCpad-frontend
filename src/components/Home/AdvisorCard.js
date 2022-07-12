import React from 'react';

import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/all';

import PropTypes from 'prop-types';

export default function AdvisorCard({ advisor }) {
    return (
        <section className="round-card advisor-card">
            <div className="round-card-header">
                <img src={advisor.picture} alt="avatar"></img>
            </div>

            <div className="round-card-body">

                <div className="social-links mb-3">
                    <a href="www.google.com"><FaTelegramPlane className="social-link" /></a>
                    <a href="www.google.com"><FaLinkedinIn className="social-link" /></a>
                </div>

                <h5 className="text-left text-white">{advisor.name}</h5>
                <p className="text-left">{advisor.position}</p>
                <p className="text-left">{advisor.company}</p>
            </div>
        </section>
    );
}

AdvisorCard.propTypes = {
    advisor: PropTypes.object.isRequired,
}
