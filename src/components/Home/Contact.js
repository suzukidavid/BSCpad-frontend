import React, { Component } from 'react';

import { BiSupport, FaTelegramPlane, FaTwitter, SiWebpack } from 'react-icons/all';

export default class Contact extends Component {
    render() {
        return (
            <section className="container contact">
                <h2 className="col-12 text-center font-weight-bold text-white hero-title">Contact</h2>
                <ul className="rotation-container contact-list">
                    <div className="contact-rotation"></div>
                    <li><a href="www.google.com"><BiSupport className="social-link" />support@bscpad.com</a></li>
                    <li><a href="www.google.com"><FaTelegramPlane className="social-link" />Join us Telegram</a></li>
                    <li><a href="www.google.com"><FaTwitter className="social-link" />Follow our Twitter</a></li>
                    <li><a href="www.google.com"><SiWebpack className="social-link" />www.bscpad.com</a></li>
                </ul>
            </section>
        );
    }
}
