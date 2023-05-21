import { useContext } from "react";
import useTitle from "../../../Hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import OurGallery from "../OurGallery/OurGallery";
import { authContext } from "../../../Auth/Auth";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import GetInTouch from "../GetInTouch/GetInTouch";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    useTitle('Home')
    const { loader } = useContext(authContext);
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
        <>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <OurGallery></OurGallery>
            <ShopByCategory></ShopByCategory>
            <GetInTouch></GetInTouch>
        </>
    );
};

export default Home;