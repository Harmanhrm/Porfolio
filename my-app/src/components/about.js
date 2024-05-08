import React, {useEffect} from 'react';
import './about.css';
import { TypeAnimation } from 'react-type-animation';
import reactimg from './imgs/react.png';
import cplusplus from './imgs/C++.png';
import javascript from './imgs/JavaScript.png';
import npm from './imgs/Npm.png';
import python from './imgs/python.png';
import sql from './imgs/sql.png';
import flutter from './imgs/flutter.png';
import img from './imgs/photo2.jpg';
import laptopImg from "./imgs/about.png"; // Make sure the path is correct
import Projects from "./Projects/Projects"
import Github from './Github';
import Footer from './Footer';
import Resume from './assets/Resume.pdf'
const FrontPage = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    const aboutSection = document.querySelector('.about-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(aboutSection);
  
    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []); 
  

  return (
   
    <div className="background">
      <header className="primary-header flex">
        {/* Header content if any */}
      </header>
      
      <nav>
      <ul id="primary-navigation" className="primary-navigation flex">
            <li className="active"><a onClick={scrollToAbout} ><span aria-hidden="true">01</span>About</a></li>
            <li className="experience"  ><a onClick={scrollToProjects}><span aria-hidden="true">02</span>Experience</a></li>
            <li className="contact"><a ><span aria-hidden="true">03</span>Contact</a></li>
            <li><a href={Resume} className="resume-link"><span>Resume</span></a></li>
      </ul>
      </nav> 
      

      <h1>
        <TypeAnimation sequence={["Hello World!", 1000]} speed={20} />
      </h1>
      <div className='button-container'>
        <h2>
      <button onClick={scrollToAbout} className="view-work-btn">View My Work</button>
      </h2>
      </div>

      <div className="skills">
        {/* Skills Row 1 */}
        <div className="skills__row">
          <div className="skills__item skills__item--html">
            <img src={cplusplus} alt="C++" />
            <div className="skills__item-name">C++</div>
          </div>
          <div className="skills__item skills__item--react">
            <img src={reactimg} alt="React" />
            <div className="skills__item-name">REACT</div>
          </div>
        </div>

        {/* Skills Row 2 */}
        <div className="skills__row">
          <div className="skills__item skills__item--js">
            <img src={javascript} alt="JavaScript" />
            <div className="skills__item-name">JAVASCRIPT</div>
          </div>
          <div className="skills__item skills__item--css">
            <img src={npm} alt="NPM" />
            <div className="skills__item-name">NPM</div>
          </div>
          <div className="skills__item skills__item--git">
            <img src={python} alt="Python" />
            <div className="skills__item-name">PYTHON</div>
          </div>
        </div>

        {/* Skills Row 3 */}
        <div className="skills__row">
          <div className="skills__item skills__item--sass">
            <img src={flutter} alt="Flutter" />
            <div className="skills__item-name">FLUTTER</div>
          </div>
          <div className="skills__item skills__item--webpack">
            <img src={sql} alt="SQL" />
            <div className="skills__item-name">SQL</div>
          </div>
        </div>
      </div>
      
      <section id='about'>
  <div className="about-section">
    <div className="content-container">
      <div className="about-content">
        <h1 className="about-title">Know <strong className="purple">Who I'M</strong></h1>
        <div className="custom-quote">
          <p style={{ textAlign: "justify" }}>
            From <span className="purple">Melbourne, VIC</span>, I am Harmandeep Singh, a motivated student
             pursuing the Bachelor of Software Engineering at <strong>RMIT</strong>. My passion for technology is driven
             by its ability to transform my vision into
             actual real-world applications for people.
          </p>
          <p style={{ textAlign: "justify" }}>
          In every project I undertake, my goal is to design solutions that are not only technologically
           advanced but also closely aligned with the needs of the community.
          </p>
          <p style={{ textAlign: "justify" }}>
            Beyond the world of code, I like to engage in activties that actively challenge me:
          </p>
          <ul>
            <li className="about-activity">Playing the Piano</li>
            <li className="about-activity">Working Out</li>
            <li className="about-activity">Playing Soccer with Friends</li>
          </ul>
          {/*<p style={{ color: "rgb(155, 126, 172)" }}>
            
            "I strive to build solutions that make a significant impact."
          </p> - Quotes*/}
          <footer className="custom-quote-footer">Harmandeep Singh</footer>
        </div>
      </div>
      <div className="about-pic">
        <img src={img} alt="Harmandeep Singh" className="img-fluid" />
      </div>
    </div>
  </div>
</section>
<section id='projects'></section>
<Projects></Projects>
<Github />
<Footer/>
    </div>
    
  );
}
// lightest-slate: #ccd6f6;
export default FrontPage;
