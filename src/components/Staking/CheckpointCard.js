import React from 'react';

import PropTypes from 'prop-types';

import { Form } from 'react-bootstrap';

export default function CheckpointCard({ content }) {
    return (
        <section className="round-card">
            <div className="round-card-header">{content.name}</div>
            <hr />
            <div className="round-card-body">
                <p className="hero-description mb-1">{content.value}</p>
                {content.name === 'Rewards' && <div className="d-flex justify-content-around">
                    <button type="button" className="btn btn-warning button-small text-white" style={{ width: '40%' }}>Stake</button>
                    <button type="button" className="btn btn-warning button-small text-white" style={{ width: '40%' }}>Withdraw</button>
                </div>}
            </div>
            <hr />
            <div className="round-card-footer">
                <Form.Check type="radio" />
            </div>
        </section >
    );
}

CheckpointCard.propTypes = {
    content: PropTypes.object.isRequired,
}
