import React from 'react'
import SocialIcon from '../Socialicon/SocialIcon';

function Topbar() {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                    <i className="bi bi-phone"></i> +91 9988776655
                </div>
                <SocialIcon/>
            </div>
        </div>
    )
}

export default Topbar;