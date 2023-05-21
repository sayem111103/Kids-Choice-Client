import { useContext, useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { authContext } from "../../Auth/Auth";
import { RiDeleteBin6Fill, BiEdit } from 'react-icons/all';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Mytoy = () => {
    const { user } = useContext(authContext)
    const [mytoy, setMyToy] = useState([])
    useTitle('My Toys')
    useEffect(() => {
        fetch(`https://toy-marketplace-server-sayem111103.vercel.app/mytoy?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`https://toy-marketplace-server-sayem111103.vercel.app/mytoy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged === true) {
                            const remaining = mytoy.filter(mt => mt._id !== id)
                            setMyToy(remaining)
                        }
                    })
            }
        })
    }

    const handleSort = (e) => {
        const price = e.target.value;

        fetch(`https://toy-marketplace-server-sayem111103.vercel.app/toysorting?email=${user.email}&&sort=${price}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }

    return (
        <section className="pb-14">
            <h3 className="text-center mb-10 lg:text-6xl text-2xl font-extrabold uppercase">My Toys</h3>
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
                            <th colSpan={3}><div className="form-control w-full max-w-xs">
                                <select onChange={handleSort} className="select capitalize select-bordered">
                                    <option disabled selected>Sort By Price</option>
                                    <option className="capitalize" value='1'>low to high</option>
                                    <option className="capitalize" value='-1'>high to low</option>
                                </select>
                            </div></th>
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
                                        <div className="font-bold capitalize">{cd.name}</div>
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
                                <RiDeleteBin6Fill onClick={() => handleDelete(cd._id)} className="text-3xl mx-auto text-red-500 cursor-pointer"></RiDeleteBin6Fill>
                            </th>
                            <th>
                                <Link to={`/update/${cd._id}`}><BiEdit className="text-3xl mx-auto cursor-pointer"></BiEdit></Link>
                            </th>
                            <th className="text-center">
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