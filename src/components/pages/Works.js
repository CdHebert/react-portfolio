import React from 'react';

const Works = ({ portfolio }) => {

    const challenges = portfolio.projects.map(project => {
        const projectImg = `${project.image}`;
        return <div key={project.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={project.url} title={project.title}>
               <img alt={project.title} src={projectImg} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{project.title}</h5>
                     <p>{project.category}</p>
                  </div>
          <div className="link-icon"><i className="fa fa-link"></i></div>
                </div>
            </a>
          <a href={project.git}><div className="git-icon"><i className="fab fa-github"></i></div></a>
          </div>
        </div>
    })
    return (
        <section id="portfolio">
  
        <div className="row">
  
           <div className="twelve columns collapsed">
  
              <h1>Check Out Some of My Works.</h1>
  
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  {challenges}
              </div>
            </div>
        </div>
     </section>
      );
    }
  
  
  export default Works;
