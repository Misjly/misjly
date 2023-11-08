import { Card, CardImg } from "reactstrap";

const Certificates = () => {
    const path = process.env.PUBLIC_URL + '/img/certificates';

    return (
        <div id='certificates' className='certificatesParallax'>
            <div className='caption'>
                Certificates
            </div>
            <div className='cert-cards'>
                <Card className='certificate col-12 col-md-6 col-xl-4'>
                    <a href='https://epam.com'>
                        <CardImg className='img' loading='lazy' src={path + '/epam.webp'} alt='epam entity framework certificate' />
                    </a>
                </Card>
                <Card className='certificate col-12 col-md-6 col-xl-4'>
                    <a href='https://nucamp.co'>
                        <CardImg className='img' loading='lazy' src={path + '/bootstrap.webp'} alt='bootstrap nucamp certificate' />
                    </a>
                </Card>
                <Card className='certificate col-12 col-md-6 col-xl-4'>
                    <a href='https://nucamp.co'>
                        <CardImg className='img' loading='lazy' src={path + '/react.webp'} alt='react nucamp certificate' />
                    </a>
                </Card>
                <Card className='certificate col-12 col-md-6 col-xl-4'>
                    <a href='https://nucamp.co'>
                        <CardImg className='img' loading='lazy' src={path + '/react-native.webp'} alt='react-native nucamp certificate' />
                    </a>
                </Card>
                <Card className='certificate col-12 col-md-6 col-xl-4'>
                    <a href='https://nucamp.co'>
                        <CardImg className='img' loading='lazy' src={path + '/node-express-mongo.webp'} alt='node, express and mongoDb nucamp certificate' />
                    </a>
                </Card>
                <Card className='certificate col-12 col-md-6 col-xl-4'>
                    <a href='https://nucamp.co'>
                        <CardImg className='img' loading='lazy' src={path + '/full-stack.webp'} alt='fullstack nucamp certificate' />
                    </a>
                </Card>
            </div>
        </div>
    );
}

export default Certificates;