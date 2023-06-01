import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram,BsSkype,BsLinkedin} from 'react-icons/bs'

function Footer() {
    return (
        <footer id="footer">
            <div className="container d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                    <div>
                        <h4>Address</h4>
                        <p>
                            F-505, <br />
                            Inovative Plazza<br />
                            New Delhi, India<br /><br />
                            <strong>Phone:</strong> +91 9988776655<br />
                            <strong>Email:</strong> cityhospital@example.com<br />
                        </p>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="twitter"><BsTwitter /></a>
                    <a href="#" className="facebook"><BsFacebook /></a>
                    <a href="#" className="instagram"><BsInstagram /></a>
                    <a href="#" className="google-plus"><BsSkype /></a>
                    <a href="#" className="linkedin"><BsLinkedin /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer