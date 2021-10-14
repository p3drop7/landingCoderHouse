import React from 'react'
import "./Footer.css"
import { BsLinkedin, BsInstagram, BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';

function Footer() {
    return (
        <div className="footer__container">
            
            <div className="footer__line"/>
            
            <div className="footer__title">CODER<span>SUMMIT21</span></div>
            
            <div className="footer__others">
                <div>Lorem</div>
                <div>Lorem</div>
                <div>Lorem</div>
                <div>Lorem</div>
                <div>Lorem</div>
            </div>

            <div className="footer__info">
                
                <div className="copyright">©2021 Coderhouse, todos los derechos reservados</div>
                
                <div className="socialMedia">
                    <p>¡Seguinos!</p>
                    <div><BsInstagram /></div>
                    <div><BsYoutube /></div>
                    <div><BsLinkedin /></div>
                    <div><BsTwitter /></div>
                    <div><BsFacebook /></div>
                </div>
            </div>

        </div>
    )
}

export default Footer
