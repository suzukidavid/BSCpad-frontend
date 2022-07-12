import React from 'react';

import PropTypes from 'prop-types';

import { SiWebpack, AiFillTwitterCircle, AiOutlineMedium, FaTelegramPlane } from 'react-icons/all';
import { ProgressBar } from 'react-bootstrap';

import img from '../assets/img/laptop_hands.jpg';

export default function Card({ content }) {
    return (
        <section className="green-card">
            <div className="green-card-header">
                <a href="/"><img src={content.picture} alt='content'></img></a>
                <div className="green-card-title">
                    <strong>{content.name}</strong>
                    <div>
                        <a href="/">more info</a>

                        <div className="social-links">
                            <a href="www.google.com"><SiWebpack className="social-link" /></a>
                            <a href="www.google.com"><AiFillTwitterCircle className="social-link" /></a>
                            <a href="www.google.com"><AiOutlineMedium className="social-link" /></a>
                            <a href="www.google.com"><FaTelegramPlane className="social-link" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="green-card-body">
                <img src={img} alt="laptop" />

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <h4 className="my-auto">YOUR STAKE</h4>
                    <button type="button" className="btn btn-success button-small">Unstake</button>
                </div>

                <strong>{content.env} env</strong>

                <div className="d-flex justify-content-between align-items-end mt-3">
                    <h4 className="mb-1">TOTAL STAKE</h4>
                    <h4 className="font-weight-bold mb-1">{content.env} ENV</h4>
                </div>

                <ProgressBar now={content.progress} variant="success" />
            </div>
            <div className="green-card-footer">
                {content.stake && <button type="button" className="btn btn-success button-large">Approve Contact</button>}

                {!content.stake && <div className="d-flex justify-content-between align-items-center">
                    <input type="text" className="form-control" defaultValue="125" />
                    <button type="button" className="btn btn-success button-large">Stake</button>
                </div>}
            </div>
        </section>
    );
}

Card.propTypes = {
    content: PropTypes.object.isRequired,
}
