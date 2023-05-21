import { useEffect, useState } from "react";
import { AiFillEye } from 'react-icons/all'
import { Link } from "react-router-dom";
import './OurGallery.css'
const OurGallery = () => {
    const [gal, setGal] = useState([])
    useEffect(() => {
        fetch('https://toy-marketplace-server-sayem111103.vercel.app/allToy')
            .then(res => res.json())
            .then(data => setGal(data))
    }, [gal])
    return (
        <section className="py-20 bg-base-300">
            <h3 className="text-center text-2xl lg:text-4xl mb-8 font-bold uppercase">Our Gallery</h3>
            <div data-aos="fade-up">
                <div className="px-5 lg:grid grid-cols-3 gap-6">
                    {gal?.slice(0, 6).map(gd => <div key={gd._id} className="toy-item mb-4 w-9/12 overflow-hidden relative mx-auto">
                        <img className="image h-80 w-full" src={gd.img} alt={gd.img} />
                        <div className="bg-[rgba(0,0,0,0.4)] overlay opacity-0 hover:opacity-100 transition-all flex justify-center items-center hover:cursor-pointer absolute top-0 left-0 w-full h-full">
                            <div>
                                <Link to={gd.img}><AiFillEye className="text-4xl hover:text-red-500 text-white"></AiFillEye></Link>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
};

export default OurGallery;