import { FaUserCircle } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { authContext } from '../../Auth/Auth';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const { auth, user } = useContext(authContext);

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'logout successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch((error) => {
            console.log(error.message);
        });
    }

    const navitem = <>
        <li><Link className='text-sm font-bold uppercase' to='/'>Home</Link></li>
        <li><Link className='text-sm font-bold uppercase' to='/alltoys'>All Toys</Link></li>
        {user ? <><li><Link className='text-sm font-bold uppercase' to='/mytoys'>My Toys</Link></li>
            <li><Link className='text-sm font-bold uppercase' to='/addtoy'>Add Toy</Link></li></> : ''}
        <li><Link className='text-sm font-bold uppercase' to='/blogs'>Blogs</Link></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navitem}
                        </ul>
                    </div>
                    <Link to='/' className="font-extrabold text-xl capitalize"><img src='/logo.svg' alt="logo.svg" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <><div className='btn btn-ghost btn-circle avatar overflow-hidden mr-4'><img title={user.displayName} className='w-full h-full' src={user.photoURL} alt={user.photoURL} /></div>
                        <button onClick={logOut} className='btn'>Logout</button></> : <><FaUserCircle className='text-4xl cursor-pointer mr-3'></FaUserCircle>
                        <Link to='/login'><button className='btn'>Login</button></Link></>}
                </div>
            </div>
        </>
    );
};

export default Navbar;