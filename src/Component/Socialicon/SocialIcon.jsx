import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'

function SocialIcon() {
    return (
        <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="facebook"><BsTwitter /></a>
            <a href="#" className="twitter"><BsFacebook /></a>
            <a href="#" className="instagram"><BsInstagram /></a>
            <a href="#" className="linkedin"><BsLinkedin /></a>
        </div>
    )
}

export default SocialIcon;