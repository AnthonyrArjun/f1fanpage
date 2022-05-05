import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Forumla 1 newsletter to receive the latest info from all things Formula 1!
                </p>
                <p className="footer-subscription-text">
                    Unsubscribe at any time, easily
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" placeholder="Your email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <a target="_blank" rel="noreferrer" href="https://github.com/AnthonyrArjun/">My GitHub</a>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
                {/* <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Team Websites</h2>
                        <a target="_blank" rel="noreferrer" href="https://www.redbullracing.com/int-en">Red Bull</a>
                        <a target="_blank" rel="noreferrer" href="https://www.mercedesamgf1.com/en/">Mercedes-AMG</a>
                        <a target="_blank" rel="noreferrer" href="https://www.ferrari.com/en-EN/formula1">Scuderia Ferrari</a>
                        <a target="_blank" rel="noreferrer" href="https://www.mclaren.com/racing/">McLaren F1</a>
                        <a target="_blank" rel="noreferrer" href="https://www.scuderiaalphatauri.com/en/">Scuderia Alpha Tauri</a>
                        <a target="_blank" rel="noreferrer" href="https://www.astonmartin.com/en-us/our-world/amf1">Aston Martin Cognizant</a>
                        <a target="_blank" rel="noreferrer" href="https://www.sauber-group.com/motorsport/formula-1/">Scuderia Alfa Romeo</a>
                        <a target="_blank" rel="noreferrer" href="https://www.alpinecars.com/en/formula-1/news/">Alpine F1</a>
                        <a target="_blank" rel="noreferrer" href="https://www.haasf1team.com/">Haas F1</a>
                        <a target="_blank" rel="noreferrer" href="https://www.williamsf1.com/">Williams F1</a>
                    </div>
                </div> */}
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Watch F1</h2>
                        <a target="_blank" rel="noreferrer" href="https://f1tv.formula1.com/">F1TV</a>
                        <a target="_blank" rel="noreferrer" href="https://www.skysports.com/watch/sky-sports-f1">SkySportsF1</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">YouTube</a>
                        <a target="_blank" rel="noreferrer" href="https://www.espn.com/f1/">ESPN</a>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">

                        </Link>
                    </div>
                    <small className="website-rights"> © F1 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Facebook">
                            <i class="fab fa-facebook-square"></i>
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Twitter">
                            <i class="fab fa-twitter-square"></i>
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="LinkedIn">
                            <i class="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Aviato">
                            <i class="fab fa-aviato"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
