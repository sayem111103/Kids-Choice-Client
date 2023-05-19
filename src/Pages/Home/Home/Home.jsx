import useTitle from "../../../Hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import OurGallery from "../OurGallery/OurGallery";

const Home = () => {
    useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <OurGallery></OurGallery>
        </>
    );
};

export default Home;