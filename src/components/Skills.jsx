import React from "react";
import recordthree from './vinyl.png';
import Person from './Person'

function Skills() {
  return (

    <div className="home">
      <img className="img-art-two position-fixed" src={recordthree} alt="vinyl artwork" />
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-12 mx-0 p-4 shadow-lg rounded">
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <Person />
                  <h2 className="col-lg-12 p-0 mb-3 page-title">Skills</h2>
                    <div className="row my-5 mx-1 sample-row d-flex flex-row">
                      <div className="col-lg-12 text-card mb-3">
                        <h3 className="mb-3">Front End Development</h3>
                      </div>
                      <div className="col-lg-12">
                        <ul>
                          <li>HTML / CSS / SCSS / Bootstrap / Razor</li>
                          <li>SaSS / Less</li>
                          <li>Wordpress / Umbraco / Magnolia</li>
                          <li>ReactJs / Angular / jQuery</li>
                        </ul>
                      </div>
                    </div>

                <div className="row my-5 mx-1 sample-row d-flex flex-row">
                  <div className="col-lg-12 text-card mb-3">
                    <h3 className="mb-3">
                      Front End Design
                    </h3>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>Photoshop / Illustrator / Sketch </li>
                      <li>Figma / Proto.io / Canva</li>
                    </ul>
                  </div>
                </div>

                <div className="row my-5 mx-1 sample-row d-flex flex-row">
                  <div className="col-lg-12 text-card mb-3">
                    <h3 className="mb-3">
                      User Experience Design
                    </h3>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>Photoshop / Illustrator / Sketch </li>
                      <li>Figma / Proto.io / Canva</li>
                      <li>Balsamiq / Lucidchart / Adobe XD</li>
                    </ul>
                  </div>
                </div>

                <div className="row my-5 mx-1 sample-row d-flex flex-row">
                  <div className="col-lg-12 text-card mb-3">
                    <h3 className="mb-3">
                      Package Management
                    </h3>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>NPM</li>
                      <li>Gulp</li>
                      <li>Yarn</li>
                      <li>NuGet</li>
                      <li>Homebrew</li>
                      <li>Yarn</li>
                    </ul>
                  </div>
                </div>

                <div className="row my-5 mx-1 sample-row d-flex flex-row">
                  <div className="col-lg-12 text-card mb-3">
                    <h3 className="mb-3">
                      Development Tooling
                    </h3>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>Github / Bitbucket / Azure / Jenkins / Docker</li>
                      <li>Visual Studio / Intellij / Notepad++ / Github Codespaces</li>
                    </ul>
                  </div>
                </div>


                <div className="row my-5 mx-1 sample-row d-flex flex-row">
                  <div className="col-lg-12 text-card mb-3">
                    <h3 className="mb-3">
                      Methodologies and Disciplines
                    </h3>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>Content Architecture / UX Architecture / UI Patterns / Workflow Illustration</li>
                      <li>Team Leadership / Management / Consulting / Client Relationships</li>
                      <li>Agile / Scrum / SAFe</li>
                      <li>Human-Centered Design / Accessibility / ADA / Section 508</li>
                      <li>Graphic Design principles / Wireframing / User Experience Certification</li>
                    </ul>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;