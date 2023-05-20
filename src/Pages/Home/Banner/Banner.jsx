const Banner = () => {
    return (
        <section className="rounded-tl-lg rounded-tr-lg py-14 lg:py-[250px]" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1526369120040-e88e9e510796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'})`, backgroundPosition:'center', backgroundAttachment: 'fixed', backgroundRepeat:'no-repeat', backgroundSize: 'cover', backgroundColor:'rgba(0, 0, 0, 0.5)', backgroundBlendMode:'multiply'}}>
            <div className="w-1/2 mx-auto text-center">
            <h3 className="text-white lg:text-6xl font-extrabold">Best Kids Store & Online Shop</h3>
            <p className="text-white text-sm lg:text-2xl lg:mt-6 font-thin">Give Toy Your Children Everyday</p>
            </div>
        </section>
    );
};

export default Banner;