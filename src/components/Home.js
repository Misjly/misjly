import Writer from './Writer';

const Home = () => {
    return (
        <div id='home' className='homeParallax'>
            <Writer />
            <div className='title top-caption'>
              I'm Mikita,<br/>fullstack developer
            </div>
            <div className='title bot-caption'>
              based in Minnesota
            </div>
          </div>
    );
}

export default Home;