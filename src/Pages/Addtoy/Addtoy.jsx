import useTitle from "../../Hooks/useTitle";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { authContext } from "../../Auth/Auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Addtoy = () => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();
    useTitle('Add Toy');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (parseFloat(data.rating) < 0 || parseFloat(data.rating) > 5 || parseFloat(data.price) < 1 || parseFloat(data.availableQuantity) < 0) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Provide Valid Number!!!'
            })
        }
        else {
            fetch('https://toy-marketplace-server-sayem111103.vercel.app/allToy', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Successfully Added'
                        })
                        
                        navigate('/mytoys')
                    }
                })
        }
    };

    return (
        <section className="pb-14 border-t border-b">
            <h3 className="text-center lg:text-6xl text-2xl font-extrabold uppercase mt-4">Add Toy</h3>
            <form className="card mx-auto shadow-2xl bg-base-100 card-body" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="flex gap-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Toy Name</span>
                        </label>
                        <input type="text" className="input input-bordered" placeholder="Toy name" {...register("name", { required: true })} />
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <input type="url" className="input input-bordered" placeholder="Photo Url" {...register("img", { required: true })} />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Seller Name</span>
                        </label>
                        <input type="text" className="input input-bordered" value={user?.displayName} {...register("sellerName", { required: true })} />
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Seller Email</span>
                        </label>
                        <input type="email" className="input input-bordered" value={user?.email} {...register("sellerEmail", { required: true })} />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <select className="border px-4 h-12 rounded-lg" {...register("subCategory", { required: true })}>
                            <option value="police car">Police Car</option>
                            <option value="Truck">Truck</option>
                            <option value="Sports Cars">Sports Cars</option>
                        </select>
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="number" className="input input-bordered" placeholder="price" {...register("price", { required: true })} />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <input type="number" className="input input-bordered" {...register("rating", { required: true })} />
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Available quantity</span>
                        </label>
                        <input type="number" className="input input-bordered" {...register("availableQuantity", { required: true })} />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Detail description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Description about your Toy" {...register("description", { required: true })} />
                </div>
                <input className="btn btn-primary mt-4" type="submit" value='Add Toy' />
            </form>
        </section>
    );
};

export default Addtoy;