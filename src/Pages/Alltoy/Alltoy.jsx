import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useState } from "react";

const Alltoy = () => {
    useTitle('All Toys')
    const data = useLoaderData();
    const [toy, setToy] = useState(data)
    const handleSearch = (e) => {
        e.preventDefault()
        const toyName = e.target.search.value;
        fetch(`https://toy-marketplace-server-sayem111103.vercel.app/toysearch/${toyName}`)
        .then(res => res.json())
        .then(data=> setToy(data))
    }
    
    return (
        <section className="pb-14">
            <h3 className="text-center mb-10 lg:text-6xl text-2xl font-extrabold uppercase">All Toys</h3>

            <form onSubmit={handleSearch} className="form-control mb-5">
                <div className="input-group justify-center">
                    <input required type="text" placeholder="Search By Toy Name" name="search" className="input focus:outline-none input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </form>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th className="text-center">Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {toy?.map(cd => <tr key={cd._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cd.img} alt={cd.img} />
                                        </div>
                                    </div>
                                    <div className="capitalize">
                                        <div className="font-bold">{cd.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="uppercase">
                                {cd.sellerName}
                            </td>
                            <td className="capitalize">{cd.subCategory}</td>
                            <td>${cd.price}</td>
                            <td className="text-center">{cd.availableQuantity}</td>
                            <th>
                                <Link to={`/details/${cd._id}`}><button className="btn">details</button></Link>
                            </th>
                        </tr>)}
                    </tbody>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                </table>
            </div>
        </section>
    );
};

export default Alltoy;