import React from "react";





const Resume = () => {



  return (
    <section className="panel color4-alt">

      <div className="inner columns divided">
        <div className="span-3-25">
          <form method="post" action="#">
            <div className="fields">
              <div className="field half">
                <h5>Front End</h5>
                <p>
                  React, Handlebars
                  HTML, CSS, JavaScript, ES6, JQuery Bootstrap, Materialize, Foundation
                </p>
                <div>
                  <h5>Node.js</h5>
                  <p>NPM packages: inquire, jest and Other packages</p>
                </div>
                <div>
                  <h5>Source Control</h5>
                  <p>Git and GitHub</p>
                </div>
              </div>
              <div className="field half">

                <h5>API Creation and Implementation</h5>
                <p>
                  Web APIs, Third-Party APIs, Server-Side APIs,
                  RESTful APIs,
                  GraphQL
                </p>
                <div>
                  <h5>Coding paradigms</h5>
                  <p>Object Oriented Programing (OOP),
                    Test Driven Development (TDD),
                    Object-Relational Mapping (ORM),
                    Object-Document Mapping (ODM)</p>
                </div>
                <div>
                  <h5>Others</h5>
                  <p> PWA and
                    MERN
                  </p>
                </div>
              </div>
              <div className="field half">

                <h5>Server Creation and Utilization</h5>
                <p>Express.js,
                  Heroku.
                  MongoDB Atlas and
                  Insomnia</p>
              </div>
              <div className="field half">
                <h5>Databases</h5>
                <p>MySQL - Sequalize,
                  MongoDB - Mongoose,
                  CRUD operations and
                  MySQL workbench</p>
              </div>
            </div>

          </form>
        </div>

      </div>


    </section >
  );
}



export default Resume;
