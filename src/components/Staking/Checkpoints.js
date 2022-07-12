import React from 'react';

import { Form } from 'react-bootstrap';

import CheckpointCard from './CheckpointCard';

import { stakings } from '../../assets/variables';

export default function Checkpoints() {
    return (
        <section className="checkpoints">
            <h2>Checkpoints</h2>
            <p>The following conditions must be met to proceed:</p>

            <div>
                <CheckpointCard key={6} content={stakings[6]} />
                <CheckpointCard key={7} content={stakings[7]} />
                <CheckpointCard key={8} content={stakings[8]} />
                <CheckpointCard key={9} content={stakings[9]} />
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <Form.Check type="checkbox" className="mr-2" />
                <span className="mr-1">I have read the</span><a href="www.google.com"> Terms and Conditions</a>
            </div>
        </section>
    );
}
