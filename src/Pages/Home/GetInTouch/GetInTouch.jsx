import { FaPhoneAlt, HiMail } from 'react-icons/all';

const GetInTouch = () => {
    return (
        <section id='getintouch' className="py-20 bg-base-300 rounded-br-lg rounded-bl-lg">
            <h3 className="text-center text-2xl lg:text-4xl mb-3 lg:mb-8 font-bold uppercase">Get in touch</h3>
            <div data-aos="fade-up">
                <div className='text-center mb-4'>
                    <a href="mailto:example@gmail.com"><HiMail className='mx-auto inline-block text-lg'></HiMail> example@gmail.com</a>
                </div>
                <div className='text-center'>
                    <a className='text-center' href="tel:+88017...."><FaPhoneAlt className='mx-auto inline-block'></FaPhoneAlt> +88017.... </a>
                </div>
            </div>
            <form className='w-1/2 mx-auto' data-aos="fade-up">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name='name' required placeholder="enter your full name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' required placeholder="enter your email" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default GetInTouch;