import React from "react";
import artlockup from './artlockup.png';
    
function Contact () {
  return (
  <div className="home">
    <img className="img-art-two" src={artlockup} alt="vinyl artwork" />
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-12 mx-3">
            <div className="row">
              <div className="col-lg-12 mb-3">
                <small>person</small><br />
                <h1 className="col-lg-12 p-0 mb-3">David Melkonian</h1>
                <small>page</small><br />
                    <h2 className="col-lg-12 p-0 mb-3 page-title">Contact</h2>
                  </div>
                </div>
                <div className="col-lg-3 p-0">
                  <ul className="list-unstyled list-inline">
                    <li className="h3"><a href="https://docs.google.com/document/d/194Y7nvZMypnbAiT-F51o4PI05_dS7X7i26euKBHTyTA/edit?usp=sharing">Resume</a></li>
                    <li className="h3"><a href="https://www.linkedin.com/in/davemelk/">LinkedIn</a></li>
                    <li className="h3"><a href="https://dribbble.com/davemelk100">Dribble</a></li>
                    <li className="h3"><a href="https://davemelk.com">Portfolio</a></li>
                  </ul>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Contact;