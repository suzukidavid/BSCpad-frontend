import React, { Component } from 'react';

import AdvisorCard from './AdvisorCard';

import { advisors } from '../../assets/variables';

export default class Advisors extends Component {
    render() {
        return (
            <section className="container system">
                <h2 className="col-12 text-center font-weight-bold text-white hero-title">Advisors</h2>
                <p className="hero-description text-center">Our mentors are a great part of our team.</p>

                <div className="round">
                    <div className="projects">
                        {advisors.map((advisor, index) => { return <AdvisorCard key={index} advisor={advisor} /> })}
                    </div>
                </div>
            </section>
        );
    }
}
