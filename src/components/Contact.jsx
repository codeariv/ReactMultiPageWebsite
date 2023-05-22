import React from "react";
import recordtwo from './stripes.png';
    
    function Contact () {
      return (
        <div className="home">
          <img class="img-art-two" src={recordtwo} alt="vinyl artwork" />
            <div class="container">
              <div class="row my-5">
                <div class="col-lg-5">
                  <div class="row">
                    <div class="col-lg-12 mb-3">
                      <small>person</small><br />
                      <h1 class="col-lg-12 p-0 mb-3">David Melkonian</h1>
                      <small>page</small><br />
                      <h2 class="col-lg-12 p-0 mb-3 page-title">Contact</h2>
                      <div class="row">
                        <div class="col-lg-9">
                          <small>skills</small><br />
                          <ul class="list-unstyled">
                            <li>Application Development</li>
                            <li>Application Solutioning</li>
                            <li>User Interface Development</li>
                            <li>User Interface Design</li>
                            <li>Technical and Creative Leadership</li>
                            <li>Accessibility Specialist</li>
                            <li>Technology Consultation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 pt-5 bio">
                  <div class="col-lg-3">
                  <small>contact</small><br />
                    <ul class="list-unstyled list-inline">
                      <li><a href="https://docs.google.com/document/d/194Y7nvZMypnbAiT-F51o4PI05_dS7X7i26euKBHTyTA/edit?usp=sharing">Resume</a></li>
                      <li><a href="https://www.linkedin.com/in/davemelk/">LinkedIn</a></li>
                      <li><a href="https://dribbble.com/davemelk100">Dribble</a></li>
                      <li><a href="https://davemelk.com">Portfolio</a></li>
                    </ul>
                  </div>
            </div>
    
            
            </div>
          </div>
        </div>
      );
    }
    
    export default Contact;