import { useContext } from "react";
import { authContext } from "../../Auth/Auth";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
    const { loader } = useContext(authContext);
    useTitle('Blogs')
    if (loader) {
        return <div className="h-[100vh] flex justify-center items-center">
            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_p8bfn5to.json"
                style={{ height: '200px', width: '200px' }}
            >
                <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    }

    return (
        <section className="py-20 bg-slate-200 px-10 rounded-lg">
            <h2 className='lg:text-4xl text-2xl mb-8 text-center text-black font-bold uppercase'>Questions and Answers</h2>
            <div>
                <h4 className='text-xl mt-4 font-bold text-black'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                <p className='ml-2 text-gray-500'><span className='text-md text-black font-semibold mt-3 text-justify'>Ans : </span>
                    A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.Store it in a cookie in client side, it can be safer than local browser storage.The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.
                </p>
                <h4 className='text-xl mt-4 font-bold text-black'>2. Compare SQL and NoSQL databases?</h4>
                <p className='ml-2 text-gray-500'><span className='text-md text-black font-semibold mt-3 text-justify'>Ans : </span>
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
                <h4 className='text-xl mt-4 font-bold text-black'>3. What is express js? What is Nest JS (google it)?</h4>
                <p className='ml-2 text-gray-500'><span className='text-md font-semibold mt-3 text-black text-justify'>Ans : </span>
                    Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.NestJS is a progressive Node. js framework for building efficient, reliable, and scalable server-side applications.
                </p>
                <h4 className='text-xl mt-4 font-bold text-black'>4. What is MongoDB aggregate and how does it work (google it)?</h4>
                <p className='ml-2 text-gray-500'><span className='text-md font-semibold mt-3 text-black text-justify'>Ans : </span>
                    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </p>
            </div>
        </section>
    );
};

export default Blogs;