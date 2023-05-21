import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const { availableQuantity, description, img, name, price, rating, sellerEmail, sellerName, subCategory, _id } = useLoaderData();
    return (
        <>
            <section className="py-[100px] rounded-lg bg-[rgba(0,0,0,0.6)]" style={{ backgroundImage: `url(${img})`, backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <h3 className="text-white text-2xl lg:text-6xl font-extrabold text-center">Toy Details</h3>
                <div className="lg:w-1/2 w-9/12 mx-auto">
                    <p className="text-white capitalize lg:text-xl text-xs font-thin mt-4"><span className="text-sm lg:text-2xl font-semibold capitalize">toy name : </span>{name}</p>
                    <p className="text-white capitalize lg:text-xl text-xs font-thin mt-4"><span className="text-sm lg:text-2xl font-semibold capitalize">seller name : </span>{sellerName}</p>
                    <p className="text-white lg:text-xl text-xs font-thin mt-4"><span className="text-sm lg:text-2xl font-semibold capitalize">seller email : </span>{sellerEmail}</p>
                    <p className="text-white capitalize lg:text-xl text-xs font-thin mt-4"><span className="text-sm lg:text-2xl font-semibold capitalize">price : </span>${price}</p>
                    <p className="text-white capitalize lg:text-xl text-xs font-thin mt-4"><span className="text-sm lg:text-2xl font-semibold capitalize">rating : </span>{rating}</p>
                    <p className="text-white capitalize lg:text-xl text-xs font-thin mt-4"><span className="text-sm lg:text-2xl font-semibold capitalize">available quantity : </span>{availableQuantity}</p>
                    <p className="text-white capitalize text-justify lg:text-xl text-xs font-thin mt-4"><span className="text-sm lg:text-2xl font-semibold capitalize">detail description : </span>{description}</p>
                </div>
                <Link to='/checkout'><button className="btn mx-auto block mt-8 bg-white text-black hover:bg-white hover:text-black">Buy now</button></Link>
            </section>
        </>
    );
};

export default Details;