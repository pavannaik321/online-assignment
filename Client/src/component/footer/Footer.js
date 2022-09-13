import React from 'react'
import './Footer.css'
import Text from "../../Images/TestME_grey.svg"
import Fb from "../../Images/facebook.svg"
import Twitter from "../../Images/twitter.svg"
import Western from "../../Images/Western-union.svg"
import Mastercard from "../../Images/mastercard.svg"
import Paypal from "../../Images/Paypal.svg"
import Visa from "../../Images/visa.svg"
import { useLocation } from 'react-router-dom';

export default function Footer(props) {
    const location = useLocation();


    if(location.pathname === '/quiz'){
        return null;
      }
      else{
    return (
        <div className="footer-main">
            <div className="footer-mid">

                <div className="f-mid-c1">
                    <img className="footer-logo" src={Text} alt="no img"></img>
                    <p className='f-mid-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div className="f-mid-c2">
                    <h3 className='footer-head-1'>Follow Us</h3>
                    <p className='f-mid-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="social-media">
                        <img className="fb" src={Fb} alt="no img"></img>
                        <img className="twitter" src={Twitter} alt="no img"></img>
                    </div>
                </div>
                <div className="f-mid-c3">
                    <h3 className='footer-head-1'>Contact Us</h3>
                    <p>iShop:address@building124</p>
                    <p>Call us now:0123-456-789</p>
                    <p>Email:support@whatever.com</p>
                </div>

            </div>

            <div className="footer-body">
                <div className="footer-card">
                    <h3>Information</h3>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className="footer-card">
                    <h3>Servicet</h3>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className="footer-card">
                    <h3>Extras</h3>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className="footer-card">
                    <h3>My Account</h3>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className="footer-card">
                    <h3>Useful Links</h3>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className="footer-card">
                    <h3>Our Offers</h3>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
            <div className='footer-credit'>
                <img className='credit-img' src={Western} alt="no img"></img>
                <img className='credit-img' src={Mastercard} alt="no img"></img>
                <img className='credit-img' src={Paypal} alt="no img"></img>
                <img className='credit-img' src={Visa} alt="no img"></img>
            </div>
        </div>
    )
      }
}