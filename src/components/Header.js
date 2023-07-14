import { useContext, useEffect } from 'react';
import { slide as Sidebar } from 'react-burger-menu';
import { MyContext } from '../App';

const Header = () => {
    const ctx = useContext(MyContext);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const mouseOverEvent = (event) => {  
        let interval = null;
        let iteration = 0;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            }).join("");

            if(iteration >= event.target.dataset.value.length) { 
                clearInterval(interval);
            }
            
            iteration += 3/5;
        }, 30);
    }

    const patternIndexing = () => {
        const anchors = document.getElementsByClassName('anchors')[0];
        Array.from(document.getElementsByClassName('anchor'))
        .forEach((item, index) => {
            item.addEventListener('mouseover', () => {anchors.dataset.activeIndex = index;});
        });
    }
    
    useEffect(() => {
        patternIndexing();
        let elements = document.getElementsByClassName('anchor');
        Array.prototype.forEach.call(elements, el => el.onmouseover = mouseOverEvent);
    }, []);

    return (
        <div id='menu'>
            <Sidebar
                className='anchors'
                pageWrapId='page-wrap' outerContainerId='outer-container'
                isOpen={ctx.isMenuOpen}
                onStateChange={(state) => ctx.stateChangeHandler(state)}
            >
                <a onClick={ctx.toggleMenu} href='#home' className='anchor' id='homeAnchor' data-value='HOME'>
                    HOME
                </a>
                <a onClick={ctx.toggleMenu} href='#about' className='anchor' id='aboutAnchor' data-value='ABOUT'>
                    ABOUT
                </a>
                <a onClick={ctx.toggleMenu} href='#certificates' className='anchor' id='certificatesAnchor' data-value='CERTIFICATES'>
                    CERTIFICATES
                </a>
                <a onClick={ctx.toggleMenu} href='#contact' className='anchor' id='contactAnchor' data-value='CONTACT'>
                    CONTACT
                </a>
            </Sidebar>
        </div>
    );
}

export default Header;