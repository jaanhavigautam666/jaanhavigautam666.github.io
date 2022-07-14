import React from 'react'
import './portfolio.css'
import IMG1 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/IMG1.jpg'
import IMG2 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/IMG2.jpg'
import IMG3 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/IMG3.jpg'
import IMG4 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/IMG4.png'
import IMG5 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/IMG5.png'
import IMG6 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/IMG6.jpg'

const data= [
{
  id: 1,
  image: IMG1,
  title:'Machine Learning Project',
  github: 'https://github.com',
  demo:'https://github.com'
},
{
  id: 2,
  image: IMG2,
  title:'Machine Learning Project',
  github: 'https://github.com',
  demo:'https://github.com'
},
{
  id: 3,
  image: IMG3,
  title:'Machine Learning Project',
  github: 'https://github.com',
  demo:'https://github.com'
},
{
  id: 4,
  image: IMG4,
  title:'Machine Learning Project',
  github: 'https://github.com',
  demo:'https://github.com'
},
{
  id: 5,
  image: IMG5,
  title:'Machine Learning Project',
  github: 'https://github.com',
  demo:'https://github.com'
},
{
  id: 6,
  image: IMG6,
  title:'Machine Learning Project',
  github: 'https://github.com',
  demo:'https://github.com'
}]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
          My recent work
      </h5>
      <h2>
          Portfolio
      </h2>
      <div className=" container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) =>{
          return(
            <article key = {id} className='portfolio__item'>
          
            <div className='portfolio__item-image'>
            <img src={image} alt={title}/> 
            </div>
               
               <h3>{title}</h3>
  
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a> 
               <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            
  
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio  