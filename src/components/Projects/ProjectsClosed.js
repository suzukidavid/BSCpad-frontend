import React, { Component } from 'react';

import CustomCard from './CustomCard';

import { projects } from '../../assets/variables';

export default class ProjectsClosed extends Component {
    render() {
        return (
            <>
                <h1 className="text-center font-weight-bold text-white project-title">PROJECTS CLOSED</h1>
                <section className="projects">
                    {
                        projects.map((project, index) => {
                            return project.status === 'Closed' && <CustomCard key={index} project={project} />
                        })
                    }
                </section>
            </>
        );
    }
}