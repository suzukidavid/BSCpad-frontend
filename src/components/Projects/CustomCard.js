import React from 'react';

import PropTypes from 'prop-types';

import { SiWebpack, AiFillTwitterCircle, AiOutlineMedium, FaTelegramPlane, BsCircleFill } from 'react-icons/all';
import { ProgressBar } from 'react-bootstrap';

export default function CustomCard({ project }) {
    return (
        <section className="custom-card">
            <div className="custom-card-header">
                <a href="/"><img src={project.picture} alt="project profile"></img></a>
                <div className="custom-card-title">
                    <strong>{project.name}</strong>
                    <div className="social-links">
                        <a href="https://www.google.com"><SiWebpack className="social-link" /></a>
                        <a href="https://www.twitter.com"><AiFillTwitterCircle className="social-link" /></a>
                        <a href="https://www.medium.com"><AiOutlineMedium className="social-link" /></a>
                        <a href="https://www.telegram.com"><FaTelegramPlane className="social-link" /></a>
                    </div>
                    <span className="status" style={{ backgroundColor: `${project.status === 'Coming' ? 'rgb(240 185 19 / 26%)' : project.status === 'Open' ? 'rgb(92 184 92 / 26%)' : 'rgb(255 0 0 / 25%)'}`, color: `${project.status === 'Coming' ? '#f1b90c' : project.status === 'Open' ? '#5cb85c' : 'red'}` }}>
                        <BsCircleFill style={{ fontSize: '.6rem', verticalAlign: 'middle' }} />
                        {project.status === 'Coming' ? ' Opens in TBA' : project.status === 'Open' ? ' Opened' : ' Closed'}
                    </span>
                    <span className="status">BUSD</span>
                </div>
            </div>
            <div className="custom-card-body">
                {project.message}
                <a href="www.google.com" style={{ color: '#f1b90c', marginTop: '10px' }}>Learn more</a>
            </div>
            <div className="custom-card-footer">
                <div className="information">
                    <div>Swap rate<br /><span>{project.swap_rate}</span></div>
                    <div>Cap<br /><span>{project.cap}</span></div>
                    <div>Access<br /><span>{project.access}</span></div>
                </div>
                <div className="custom-progress-bar">
                    <div className="progress-title">
                        <span>Progress</span>
                        <span>Participants <span style={{ color: 'white', fontWeight: 'bold' }}>3812</span></span>
                    </div>
                    <ProgressBar now={project.progress} variant="warning" />
                    <div className="progress-title">
                        <span style={{ color: 'white', fontWeight: 'bold' }}>{project.progress}%</span>
                        <span style={{ color: 'white', fontWeight: 'bold' }}>300/200</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

CustomCard.propTypes = {
    project: PropTypes.object.isRequired,
}
