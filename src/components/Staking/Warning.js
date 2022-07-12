import React from 'react';

import PropTypes from 'prop-types';

import { ImWarning } from 'react-icons/all';

export default function Warning({ content }) {
    return (
        <section className="d-flex justify-content-around align-items-center my-5 py-3" style={{ bakcgroundColor: '#171717', color: '#f1b90c', boxShadow: '0px 10px rgb(0 0 0 / 5%)' }}>
            <ImWarning style={{ fontSize: '5rem', paddingRight: '10px' }} />
            <div>
                <p>After Unstaking, you must wait 7 days before you can withdraw your BSCPAD and rewards.</p>
                <p>The amount of tokens you Unstake will not count towards your tier level for upcoming Projects.</p>
            </div>
        </section >
    );
}

Warning.propTypes = {
    content: PropTypes.object.isRequired,
}
