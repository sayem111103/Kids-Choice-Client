import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Error = () => {
    return (
        <div className="flex justify-center items-center h-[100vh] w-full">
            <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_bhw1ul4g.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    );
};

export default Error;