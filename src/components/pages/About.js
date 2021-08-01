import React from "react";


const About = ({ aboutMe }) => (
  <section id="about">
  <div className="row">
     <div className="nine columns main-col background">
        <h1>About Me</h1>
     <div className="three columns">
        <img className="profile-pic"  src={aboutMe.image} alt="Cody Hebert" />
     </div>

        <p>{aboutMe.bio}</p>
        <div className="row">
           <hr />
           <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
           <span>{aboutMe.name}</span><br />
           <br />
                <a href="mailto:chebert222@gmail.com">
                   <span>{aboutMe.email}</span>
                   </a> 
         </p>
           </div>
           <div className="columns download">
              <p>
                 <a href={aboutMe.resume} className="button"><i className="fa fa-download"></i>Resume</a>
              </p>
           </div>
        </div>
     </div>
  </div>

</section>
);

export default About;
