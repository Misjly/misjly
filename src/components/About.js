import anime from "animejs";
import { useEffect } from "react";

const About = () => {
    
    let columns = 0,
        rows = 0,
        toggled = false;

    const toggle = () => {
        toggled = !toggled;
        
        document.body.classList.toggle("toggled");
    }

    const handleOnClick = index => {
        toggle();
        
        anime({
            targets: ".tile",
            opacity: toggled ? 0 : 1,
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index
            })
        });
    }

    const createTile = index => {
        const tile = document.createElement("div");
        
        tile.classList.add("tile");
        
        tile.style.opacity = toggled ? 0 : 1;
        
        tile.onclick = e => handleOnClick(index);
        
        return tile;
    }

    const createTiles = quantity => {
        const wrapper = document.getElementById("tiles");
        Array.from(Array(quantity)).map((tile, index) => {
            return wrapper.appendChild(createTile(index));
        });
    }

    const createGrid = () => {
        const wrapper = document.getElementById("tiles");
        wrapper.innerHTML = "";
        
        const size = document.body.clientWidth > 800 ? 70 : 30;
        
        columns = Math.floor(document.body.clientWidth / size);
        rows = Math.floor(document.body.clientHeight / size);
        
        wrapper.style.setProperty("--columns", columns);
        wrapper.style.setProperty("--rows", rows);
        
        createTiles(columns * rows);
    }


    useEffect(() => {
        createGrid();
    });
    window.onresize = () => createGrid();
    
    const birthday = new Date('September 8, 2001');
    const date = Date.now() - birthday;
    const ageDate = new Date(date);
    const yearsOld = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    return (
        <div id='about' className='body'>
            <div id='tiles'></div>
            <div className='centered'>
                <div className='about-caption'>
                    About me
                </div>
                <div className='about-me'>
                    I'm {yearsOld} years old, from Belarus. Everybody calls me Nikita or Nick.
                    I was a student at <a href='https://www.linkedin.com/school/yanka-kupala-state-university-of-grodno/' className='about-link'>
                    Yanka Kupala State University of Grodno</a> for almost 3 years before I got to the US in 2022. 
                    I was in the field of Software Engineering, department of math and physics
                    (rough translation is Software of Informational Technologies).
                    I'm a <a href='https://nucamp.co' className='about-link'>Nucamp</a> graduate, all certificates are <a href='#certificates' className='about-link'>
                        here
                    </a>.<br/><br/>
                    I'm proficient in English and fluent in Russian. Aside from Nucamp experience, I was studying several programming 
                    languages at university: C/C++ for a year and Assembly for half a year as a base for future education, 
                    then C# including it in all my subjects, projects and course of Entity Framework in .Net, 
                    so learning Java was a matter of slight syntax difference. 
                    I'm ready for new projects and want to learn everything that can be complementary to my knowledge. 
                </div>
            </div>
        </div>);
}

export default About;