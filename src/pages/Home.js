import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Hero from '../components/Home/Hero';
import AboutUs from '../components/Home/AboutUs';
import System from '../components/Home/System';
import Advisors from '../components/Home/Advisors';
import Contact from '../components/Home/Contact';

export default function Home() {

    return (
        <>
            <Header />
            <Background />
            <Hero />
            <AboutUs />
            <System />
            <Advisors />
            <Contact />
            <Footer />
        </>
    )
}