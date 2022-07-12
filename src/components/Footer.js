import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="col-xl-10 offset-xl-1">
                    <a>Copyright © 2021. All Rights Reserved by BSCPad</a>
                    <span>v1.1.6</span>
                    <div>
                        <Link to="/privacypolicy">Privacy Policy</Link>
                        <Link to="/impress">Impress</Link>
                    </div>
                </div>
            </div>
        );
    }
}
