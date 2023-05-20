import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="flex justify-center items-center h-[100vh] w-full">
            <div>
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_bhw1ul4g.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>

                <Link to='/'><button className='btn uppercase mx-auto block'>Back to home</button></Link>
            </div>
        </div>
    );
};

export default Error;