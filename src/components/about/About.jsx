import React from 'react'
import './about.css' 
import ME from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/ME.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About ME</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img  src={ME} alt='About Image'/>
          </div>

        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>
                    Experience
                  </h5>
                  <small>
                    1+ Years of Working Experience
                  </small>
              </article>
              <article className='about__card'>
                  <FaUserGraduate className='about__icon'/>
                  <h5>
                    Academics
                  </h5>
                  <small>
                    BTech in CSE
                  </small>
              </article>
              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>
                    Projects
                  </h5>
                  <small>
                    5+ Projects
                  </small>
              </article>
            </div>
            <p>
            Data science and machine learning enthusiast, specializing in languages Python, C and C++, front-end technologies HTML, CSS and JS, DBMS MYSQL, and beginner in web framework Django. Experienced at
            implementing variously supervised and unsupervised machine learning models to deliver insights and
            implement action-oriented solutions to complex business problems. Extremely motivated to constantly
            develop my skills and grow professionally.
          
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About