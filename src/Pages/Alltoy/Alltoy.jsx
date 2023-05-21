import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Alltoy = () => {
    useTitle('All Toys')
    const data = useLoaderData();
    return (
        <section className="pb-14">
            <h3 className="text-center mb-10 lg:text-6xl text-2xl font-extrabold uppercase">All Toys</h3>
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
                        {data.slice(0, 20).map(cd => <tr key={cd._id}>
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