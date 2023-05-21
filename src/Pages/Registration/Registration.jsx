import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Auth/Auth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import useTitle from "../../Hooks/useTitle";

const Registration = () => {
    useTitle('Registration')
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('')
    const { userWithEmailPass } = useContext(authContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        setError('')
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photo = data.imgUrl;
        userWithEmailPass(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
                updatesProfile(user, name, photo)
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });

    };

    const updatesProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                // Profile updated!
                location.reload()
                // ...
            }).catch((error) => {
                // An error occurred
                setError(error.message)
                // ...
            });
    }

    return (
        <div className="min-h-screen py-16 bg-base-200 px-2 lg:px-0">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">For Better Experience!!</p>
            </div>
            <form className="card lg:w-1/3 mx-auto shadow-2xl bg-base-100 card-body" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-red-500">{error}</p>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" className="input input-bordered" placeholder="Your name" {...register("name", { required: true })} />
                </div>
                {errors.name && <span className="text-red-500">This field is required</span>}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="url" className="input input-bordered" placeholder="Photo Url" {...register("imgUrl", { required: true })} />
                </div>
                {errors.imgUrl && <span className="text-red-500">This field is required</span>}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" className="input input-bordered" placeholder="example@gmail.com" {...register("email", { required: true })} />
                </div>
                {errors.email && <span className="text-red-500">This field is required</span>}

                {/* include validation with required or other standard HTML validation rules */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input className="input input-bordered" type="password" {...register("password", { required: true })} />
                </div>
                {/* errors will return when field validation fails  */}
                {errors.password && <span className="text-red-500">This field is required</span>}

                <input className="btn btn-primary mt-4" type="submit" value='register' />
                <p className="text-center">Already have an account? <Link to='/login' className='text-blue-500'>click here to Login</Link></p>
            </form>
        </div>
    );
};

export default Registration;