import Typewriter from 'typewriter-effect';

const Writer = () => {
    return (
        <Typewriter options={{
            loop: true,
            delay: 100,
            deleteSpeed: 30,
            pauseFor: 700,
            autoStart: true,
            strings: ['Welcome', 'Greetings', 'Hello', 'Hi!']
        }}/>
    );
}

export default Writer;