import React, { useState } from 'react';

export default function Switch() {
    const [selected, setSelected] = useState(0);


    return (
        <div className="custom-switch mb-5">
            <span className={selected === 0 && 'active'} onClick={() => setSelected(0)}>Live</span>
            <span className={selected === 1 && 'active'} onClick={() => setSelected(1)}>Finished</span>
        </div>
    );
}