import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Tentang Eyeroom
                </p>
                <p className="footer-subscription-text">
                    Kirim masukan dan kritikan kamu tentang Eyeroom disini yah!
                </p>
                <div className="input-areas">
                    <form>
                       <input type="email" name="email" placeHolder="ketikan disini" className="footer-input"/>
                       <Button buttonStyle='btn--outline'>Kirim</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className='footer-link-items'>
                        <h2>Made By</h2>
                        <Link to='/sign-up'>Bella Anggraeni</Link>
                        <Link to='/'>Intan Nur</Link>
                        <Link to='/'>Miana Nur Haliza</Link>
                        <Link to='/'>Salwa Nurul Aisha</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>@bellaanggraeni</Link>
                        <Link to='/'>@intannur</Link>
                        <Link to='/'>@miananurhlz</Link>
                        <Link to='/'>@salwanrlisha</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className='footer-link-items'>
                        <h2>Came from</h2>
                        <Link to='/sign-up'>SMKN 1 Cimahi</Link>
                        <Link to='/'>Teknik Elektronika Daya dan Komunikasi</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                   <div className="footer-logo">
                       <Link to='/' className="social-logo">
                            <img src="/images/logo-eyeroom.png" className='img-footer'/>
                       </Link>
                   </div>
                   <small className="website-rights">eyeroom @2021</small>
                   <div className="social-icons">
                       <Link className="social-icon-link facebook" 
                       to='/'
                       target='_blank'
                       arial-label='Facebook'
                       >
                           <i className='fab fa-facebook-f'></i>
                       </Link>
                       <Link className="social-icon-link instagram" 
                       to='/'
                       target='_blank'
                       arial-label='Instagram'
                       >
                           <i className='fab fa-instagram'></i>
                       </Link>
                       <Link className="social-icon-link twitter" 
                       to='/'
                       target='_blank'
                       arial-label='Twitter'
                       >
                           <i className='fab fa-twitter'></i>
                       </Link>
                       <Link className="social-icon-link youtube" 
                       to='/'
                       target='_blank'
                       arial-label='Youtube'
                       >
                           <i className='fab fa-youtube'></i>
                       </Link>
                       <Link className="social-icon-link linkedin" 
                       to='/'
                       target='_blank'
                       arial-label='Linkedin'
                       >
                           <i className='fab fa-linkedin'></i>
                       </Link>
                   </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
