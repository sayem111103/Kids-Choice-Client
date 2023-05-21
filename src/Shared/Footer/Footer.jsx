import { Link } from 'react-router-dom';
import logo from '/logo.svg'
import { FaFacebook, BsTwitter, BsInstagram } from 'react-icons/all';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 text-base-content mt-4">
                <div className='mx-auto'>
                    <Link className='mx-auto' to='/'><img src={logo} alt={logo} /></Link>
                    <div className='flex mx-auto'>
                        <a href="#"><FaFacebook className='mr-5 text-xl text-blue-600' ></FaFacebook></a>
                        <a href="#"><BsTwitter className='mr-5 text-xl text-blue-600'></BsTwitter></a>
                        <a href="#"><BsInstagram className='mr-5 text-xl text-red-600'></BsInstagram></a>
                    </div>
                    <p>Kids Choice.<br />Providing reliable Toy since 2010.</p>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <a href='#about' className="link link-hover mx-auto">About us</a>
                    <a href='#getintouch' className="link link-hover mx-auto">Contact</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title mx-auto">Legal</span>
                    <a href='#' className="link link-hover mx-auto">Terms of use</a>
                    <a href='#' className="link link-hover mx-auto">Privacy policy</a>
                    <a href='#' className="link link-hover mx-auto">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2010 - All right reserved by Kids Choice</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;