import React from 'react';

import { cards } from '../assets/variables';

import Card from '../components/Card';

export default function Error() {

    return (
        <>
            <h1 className="text-white text-center font-weight-bold">Project</h1>
            <div className="row mx-0">
                {cards.map((card, index) => {
                    return card.type === 'project' && <div key={index} className="col-12 col-md-6 col-xl-4">
                        <Card content={card} />
                    </div>
                })}
            </div>
            <h1 className="text-white text-center font-weight-bold mt-5 pt-5">Organisation</h1>
            <div className="row mx-0">
                {cards.map((card, index) => {
                    return card.type === 'organisation' && <div key={index} className="col-12 col-md-6 col-xl-4">
                        <Card content={card} />
                    </div>
                })}
            </div>
        </>
    )
}