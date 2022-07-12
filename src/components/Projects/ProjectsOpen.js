import React, { Component } from 'react';

import CustomCard from './CustomCard';

import { projects } from '../../assets/variables';

export default class ProjectsOpen extends Component {
    render() {
        return (
            <>
                <h1 className="text-center font-weight-bold text-white project-title">PROJECTS OPEN NOW</h1>
                <section className="projects">
                    {
                        projects.map((project, index) => {
                            return project.status === 'Open' && <CustomCard key={index} project={project} />
                        })
                    }
                </section>
            </>
        );
    }
}