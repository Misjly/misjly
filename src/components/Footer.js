import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTelegram, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const CopyOnClick = (e) => {
        navigator.clipboard.writeText(e.target.getAttribute('data-value'));
        let labelText = e.target.id;
        e.target.innerHTML = 'Copied to clipboard';
        
        document.getElementById(e.target.id).disabled = true;
        
        setTimeout(() => {
            document.getElementById(e.target.id).disabled = false;
            e.target.innerHTML = labelText;
        }, 1500);
        
    }

    return (
        <div className='footer' id='contact'>
                <div
                    id='Email'
                    onClick={CopyOnClick}
                    data-value='nikmisg@gmail.com'
                    className='col-11 col-sm-3 col-lg-1 me-lg-5 contact-info'>
                        Email
                </div>
                <a href='https://www.linkedin.com/in/mikita-misiulia' className='col-1'>
                    <FontAwesomeIcon icon={faLinkedin} className='contact-icon fa-2xl'/>
                </a>
                <a href='https://github.com/Misjly' className='col-1'>
                    <FontAwesomeIcon icon={faGithub} className='contact-icon fa-2xl'/>
                </a>
                <a href='https://t.me/Misjly' className='col-1'>
                    <FontAwesomeIcon icon={faTelegram} className='contact-icon fa-2xl'/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100078749592910' className='col-1'>
                    <FontAwesomeIcon icon={faFacebook} className='contact-icon fa-2xl'/>
                </a>
                <a href='https://www.instagram.com/niksept/' className='col-1'>
                    <FontAwesomeIcon icon={faInstagram} className='contact-icon fa-2xl'/>
                </a>
                <div
                    id='Phone'
                    onClick={CopyOnClick}
                    data-value='+16124775573'
                    className='col-11 col-sm-3 col-lg-1 ms-lg-5 contact-info'>
                        Phone
                </div>
        </div>
    );
}

export default Footer;