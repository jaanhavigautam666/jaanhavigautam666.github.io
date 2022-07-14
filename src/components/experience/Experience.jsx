import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        Skill-Set I posses
      </h5>
      <h2>
        My Experience
      </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>
            FRONTED DEVELOPMENT
          </h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
          <h3>
            BACKEND DEVELOPMENT
          </h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>PYTHON</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>DJANGO</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MY SQL</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MACHINE LEARNING</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>DEEP LEARNING</h4>
              <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>




    </section>
  )
}

export default Experience