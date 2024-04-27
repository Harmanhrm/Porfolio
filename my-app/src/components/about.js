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

const scrollToAbout = () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
};
  
const FrontPage = () => {
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
            <li className="active"><a href="personal.html"><span aria-hidden="true">01</span>About</a></li>
            <li className="experience"><a href="experience.html"><span aria-hidden="true">02</span>Experience</a></li>
            <li className="contact"><a href="Work.html"><span aria-hidden="true">03</span>Contact</a></li>
            <li><a href="/resume.pdf" className="resume-link"><span>Resume</span></a></li>
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
      

      <section id="about" className="about-section">
        <h2 className="numbered-heading">About</h2> 
        
        <div className="about-inner">
          <div className="about-text">
            <p>My name is Harmandeep Singh. I am a Student Software Engineer</p>
            <p>I've worked using different technologies, both backend and frontend. I'm currently working using Spring Boot and JavaScript. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.</p>
            <p>You can read more about me on my <a href="https://linkedin.com/in/aitdahmane" rel="noopener noreferrer" target="_blank">LinkedIn</a> page, or check my <a href="https://github.com/aitdahmane" rel="noopener noreferrer" target="_blank">GitHub</a> for some cool things.</p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="skills-list">
          </ul>
        </div>
        <div className="about-pic">
          <img src={img} alt="Headshot" className="dynamic-image" />
        </div>
      </div>
    </section>
    
    </div>
    
  );
}
// lightest-slate: #ccd6f6;
export default FrontPage;
