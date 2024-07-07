import React, { useState, useRef } from 'react';
import a2 from './images/a2.png';
import c7 from './images/c7.png';
import checkmark from './images/checkmark.png';
import education from './images/education.png';
import email from './images/email.png';
import experience from './images/experience.png';
import github from './images/github.png';
import leader from './images/leader.jpg';
import linkedin from './images/linkedin.png';
import news from './images/news.avif';
import word from './images/word.jpg';



import './styles.css';
import './mediaqueries.css';

const Home = () => {
  const paragraphStyle = {
    textAlign: 'justify'
  };
  const left = {
    textAlign: 'left'
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handlesubmit = async(e) => {
    e.preventDefault();
    let data = await fetch("http://localhost:3000", {
      method: "post",
      body: JSON.stringify({name, email, subject, message}),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    data = await data.json();
    console.log(data);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }
  const handlemessage = (e) => {
    setMessage(e.target.value);
  }


  return (
    <div>
      <nav id="desktop-nav">
        <a className="logo" href="#">Krupa Shobhashna</a>
        <div>
          <ul className="nav-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#ina">Interest & Achievement</a></li>
            <li><a href="#experience">Skill & Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="other-nav">
        <div className="other-menu">
          <div className={`other-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Skill</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>

      <section id="profile">
        <div className="section__pic-container">
          <img src={c7} alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Krupa Shobhashna</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('')}
            >
              Download Resume
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href='./#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.location.href='https://linkedin.com/'}
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={() => window.location.href='https://github.com/'}
            />
          </div>
        </div>
      </section>


      <hr />



      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src={a2}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experience}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>1 Month Internship(2023)<br />Frontend Development</p>
                <p>(HTML, CSS, JS)</p>
              </div>
              <div className="details-container">
                <img
                  src={experience}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>1 Month Internship(2024)<br />Frontend Development</p>
                <p>(HTML, CSS, JS, React)</p>
              </div>
            </div>
            <div className="text-container">
              <p style={paragraphStyle}>
                I am a student of the forth year Looking for a challenging career in the field of Computer Engineering which provides me a platform to present my practical knowledge , Technical , Analytical and Professional Skills , where I can utilize my skills for developing my career and for the growth of the organization. also , I like to play the outdoor games . so overall , I am dedicated professional with keen interest in the technology , fitness and sports .
              </p>
            </div>
          </div>
        </div>
      </section>


      <hr />





      <section id="ina">
        <h1 className="title">Interest & Achievement</h1>

        <div className="section-container">
          <div className="section__pic-container">
            <img
              src={a2}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h3>Achievements</h3>
                <br />
                <img
                  src={experience}
                  alt="Experience icon"
                  className="icon"
                />
                <p>State level athletics player<br />100mtr and 200mtr Running</p>
                <p>(2017-2018)</p>
                <br />
                <img
                  src={experience}
                  alt="Experience icon"
                  className="icon"
                />
                <p>Runners Up in University tournament Volleyball</p>
                <p>2022-2023</p>
                <p>2023-2024</p>
              </div>
              <div className="details-container">
                <h2 className="experience-sub-title">Interest</h2>
                <div className="article-container">
                  <article>
                    <div>
                      <h3>Badminton</h3>
                    </div>
                  </article>
                  <article>
                    <div>
                      <h3>Cycling, Skating</h3>
                    </div>
                  </article>
                  <article>
                    <div>
                      <h3>Gymnastics</h3>
                    </div>
                  </article>
                  <article>
                    <div>
                      <h3>Volleyball</h3>
                    </div>
                  </article>
                  <article>
                    <div>
                      <h3>Coding</h3>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <hr />


      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills and Education</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Website Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>MERN</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Bootstrap</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>TailwindCSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Education</h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SSC</h3>
                    <p>89.2%(CBSE)</p>
                    <p>JNV Vadodara</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HSC</h3>
                    <p>94.1%(GSEB)</p>
                    <p>Aditi Science School</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Computer Engineering</h3>
                    <p>8.63(CGPA)</p>
                    <p>Charusat University</p>
                  </div>
                </article>
                <article>
                  {/* <!-- <img
                          src={checkmark}
                          alt="Experience icon"
                          className="icon"
                        />
                        <div>
                          <h3>Git</h3>
                          <p>Intermediate</p>
                        </div> --> */}
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>


      <hr />


      <section id="projects" className="height">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={news}
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">News Website</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href='https://github.com/'}>
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <br />
              <div className="article-container">
                <img
                  src={leader}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">LeaderSphere</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href='https://github.com/'}>
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={word}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">WordMagic</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href='https://github.com/'}>
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <hr />


      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-form-container">
          {/* <!-- <h2>Contact Me</h2> --> */}
          <form className="contact-form" onSubmit={handlesubmit}>
            <label htmlFor="name" style={left}>Name</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => {setName(e.target.value)}}/>

            <label htmlFor="email" style={left}>Email</label>
            <input type="email" id="email" name="email" required value={email} onChange={(e) => {setEmail(e.target.value)}}/>

            <label htmlFor="subject" style={left}>Subject</label>
            <input type="text" id="subject" name="subject" required value={subject} onChange={(e) => {setSubject(e.target.value)}}/>

            <label htmlFor="message" style={left}>Message</label>
            <textarea id="message" name="message" rows="5" required value={message} onChange={handlemessage}></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>




      <hr />


      <footer>
        <p>Copyright &#169; 2024 Krupa Shobhashna. All Rights Reserved.</p>
      </footer>









    </div>
  )
}

export default Home
