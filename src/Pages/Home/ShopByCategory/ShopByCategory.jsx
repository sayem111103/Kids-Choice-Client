import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
    const [carData, setCarData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://toy-marketplace-server-sayem111103.vercel.app/allToy`);
            const data = await res.json();
            const police = data.filter(cd => cd.subCategory === 'police car');
            setCarData(police)
        }
        fetchData()
    }, []);

    const car = subCategory => {
        fetch(`https://toy-marketplace-server-sayem111103.vercel.app/allToy/${subCategory}`)
            .then(res => res.json())
            .then(data => setCarData(data))
    }
    return (
        <section className="py-20 bg-base-200">
            <h3 className="text-center text-2xl lg:text-4xl mb-8 font-bold uppercase">Shop By Category</h3>
            <div className='text-center'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => car("police car")}><h4 className='font-bold bg-transparent'>Police Cars</h4></Tab>
                        <Tab onClick={() => car("Truck")}><h4 className='font-bold bg-transparent'>Truck</h4></Tab>
                        <Tab onClick={() => car("Sports Cars")}><h4 className='font-bold bg-transparent'>Sports Cars</h4></Tab>
                    </TabList>

                    <TabPanel>
                        <div data-aos="fade-up" className='flex justify-center flex-wrap gap-6 mt-8 px-3'>
                            {carData?.map(cd =>
                                <div key={cd._id} className="card w-[370px] bg-base-100 shadow-xl">
                                    <figure><img className="h-60 w-full" src={cd.img} alt={cd.img} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title capitalize">
                                            {cd.name}
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p className='text-justify text-xs lg:text-sm font-thin'>{cd.description}</p>
                                        <div className="card-actions justify-between items-center">
                                            <div>
                                                <Link to={`/details/${cd._id}`}><button className='btn text-xs lg:text-sm'>View Details</button></Link>
                                            </div>
                                            <div>
                                                <div className="badge badge-outline">{cd.subCategory}</div>
                                                <div className="badge badge-outline ml-2">Products</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex justify-center flex-wrap gap-6 mt-8 px-3'>
                            {carData.map(cd =>
                                <div key={cd._id} className="card w-[370px] bg-base-100 shadow-xl">
                                    <figure><img className="h-60 w-full" src={cd.img} alt={cd.img} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {cd.name}
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p className='text-justify text-xs lg:text-sm font-thin'>{cd.description}</p>
                                        <div className="card-actions justify-between items-center">
                                            <div>
                                                <Link to={`/details/${cd._id}`}><button className='btn text-xs lg:text-sm'>View Details</button></Link>
                                            </div>
                                            <div>
                                                <div className="badge badge-outline">{cd.subCategory}</div>
                                                <div className="badge badge-outline ml-2">Products</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex justify-center flex-wrap gap-6 mt-8 px-3'>
                            {carData.map(cd =>
                                <div key={cd._id} className="card w-[370px] bg-base-100 shadow-xl">
                                    <figure><img className="h-60 w-full" src={cd.img} alt={cd.img} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {cd.name}
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p className='text-justify text-xs lg:text-sm font-thin'>{cd.description}</p>
                                        <div className="card-actions justify-between items-center">
                                            <div>
                                                <Link to={`/details/${cd._id}`}><button className='btn text-xs lg:text-sm'>View Details</button></Link>
                                            </div>
                                            <div>
                                                <div className="badge badge-outline">{cd.subCategory}</div>
                                                <div className="badge badge-outline ml-2">Products</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default ShopByCategory;