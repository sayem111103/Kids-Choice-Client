import { useContext, useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { authContext } from "../../Auth/Auth";
import { RiDeleteBin6Fill, BiEdit } from 'react-icons/all';

const Mytoy = () => {
    const { user } = useContext(authContext)
    const [mytoy, setMyToy] = useState([])
    useTitle('My Toys')

    useEffect(() => {
        fetch(`https://toy-marketplace-server-sayem111103.vercel.app/mytoy?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [])
    return (
        <section className="pb-14">
            <h3 className="text-center mb-10 text-6xl font-extrabold uppercase">My Toys</h3>
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mytoy.slice(0, 20).map(cd => <tr key={cd._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cd.img} alt={cd.img} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{cd.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {cd.sellerName}
                            </td>
                            <td>{cd.subCategory}</td>
                            <td>${cd.price}</td>
                            <td className="text-center">{cd.availableQuantity}</td>
                            <th>
                                <RiDeleteBin6Fill className="text-3xl mx-auto text-red-500 cursor-pointer"></RiDeleteBin6Fill>
                            </th>
                            <th>
                                <BiEdit className="text-3xl mx-auto cursor-pointer"></BiEdit>
                            </th>
                            <th className="text-center">
                                <button className="btn">details</button>
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                </table>
            </div>
        </section>
    );
};

export default Mytoy;