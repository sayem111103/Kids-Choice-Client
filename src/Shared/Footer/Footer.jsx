import { Link } from 'react-router-dom';
import logo from '/logo.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 text-base-content mt-4">
                <div className='mx-auto'>
                    <Link to='/'><img src={logo} alt={logo} /></Link>
                    <p>Kids Choice.<br />Providing reliable Toy since 2010.</p>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <a href='#' className="link link-hover">About us</a>
                    <a href='#' className="link link-hover">Contact</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Legal</span>
                    <a href='#' className="link link-hover">Terms of use</a>
                    <a href='#' className="link link-hover">Privacy policy</a>
                    <a href='#' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;