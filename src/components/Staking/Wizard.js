import React from 'react';

import PropTypes from 'prop-types';

import { GiHamburgerMenu, FaDollarSign, FaUserCheck, IoShieldCheckmarkOutline, FiCheck, FaExclamation } from 'react-icons/all';

export default function Wizard({ wizard }) {
    return (
        <section className="wizard">
            <h2>{wizard === 'stake' ? 'Stake' : wizard === 'unstake' ? 'Unstake' : 'Withdraw'} your BSCPAD</h2>

            {wizard === 'stake' && <div>
                <div className="active">
                    <GiHamburgerMenu className="social-link" />
                    <span>Checkpoints</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <FaDollarSign className="social-link" />
                    <span>Amount to Stake</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <FaUserCheck className="social-link" />
                    <span>Pre-authorization</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <IoShieldCheckmarkOutline className="social-link" />
                    <span>Confirm</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <FiCheck className="social-link" />
                    <span>Confirmation</span>
                </div>
            </div>}
            {wizard === 'unstake' && <div>
                <div className="active">
                    <FaExclamation className="social-link" />
                    <span>Warning</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <GiHamburgerMenu className="social-link" />
                    <span>Checkpoints</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <FaDollarSign className="social-link" />
                    <span>Amount to Unstake</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <FaDollarSign className="social-link" />
                    <span>Initialize Unstake</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <FiCheck className="social-link" />
                    <span>Confirmation</span>
                </div>
            </div>}
            {wizard === 'withdraw' && <div>
                <div className="active">
                    <GiHamburgerMenu className="social-link" />
                    <span>Checkpoints</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <FaDollarSign className="social-link" />
                    <span>Initialize Withdrawl</span>
                </div>
                <hr className="d-none d-lg-block" />
                <div>
                    <FiCheck className="social-link" />
                    <span>Confirmation</span>
                </div>
            </div>}
        </section>
    );
}

Wizard.propTypes = {
    wizard: PropTypes.string.isRequired,
}
