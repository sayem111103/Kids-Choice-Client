import { useForm } from "react-hook-form";

const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="min-h-screen py-5 bg-base-200">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">For Better Experience!!</p>
            </div>
            <form className="card w-1/3 mx-auto shadow-2xl bg-base-100 card-body" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="input input-bordered" placeholder="example@gmail.com" {...register("email",{required: true})} />
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

                <input className="btn btn-primary" type="submit" value='register' />
            </form>
        </div>
    );
};

export default Registration;