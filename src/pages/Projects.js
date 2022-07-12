import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import ProjectsOpen from '../components/Projects/ProjectsOpen';
import ProjectsComing from '../components/Projects/ProjectsComing';
import ProjectsClosed from '../components/Projects/ProjectsClosed';

export default function Projects() {

    return (
        <>
            <Header />
            <Background />
            <ProjectsOpen />
            <ProjectsComing />
            <ProjectsClosed />
            <Footer />
        </>
    )
}