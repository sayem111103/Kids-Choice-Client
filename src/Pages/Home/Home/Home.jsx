import useTitle from "../../../Hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";

const Home = () => {
    useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <AboutUs></AboutUs>
        </>
    );
};

export default Home;