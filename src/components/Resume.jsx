import React from "react";
import artstag from './artstag.png';
import Person from './Person'

function Resume() {
  return (
    <div className="home">
      <img className="img-art-two position-fixed" src={artstag} alt="vinyl artwork" />
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-12 mx-0 p-4 shadow-lg rounded">
            <div className="row">
              <div className="col-lg-12 mb-3">
                <Person />
                <h2 className="col-lg-12 p-0 mb-3 page-title">Resume</h2>
              </div>
            </div>

            <div className="row my-5 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card mb-3">
                <h3 className="mb-3">
                  My Resume (<a href="https://docs.google.com/document/d/194Y7nvZMypnbAiT-F51o4PI05_dS7X7i26euKBHTyTA/edit?usp=sharing">LINK</a>)
                </h3>
              </div>
              <div className="col-lg-12">
                <iframe
                  src={"https://docs.google.com/document/d/e/2PACX-1vR9d2bT85ePcdAHFbGbH5Q5QJ8gBPC_ug06fckoPNnuyVIgZ8MxVFBpRQIC30YLj5dUxF6ll_EQPAb0/pub"}
                  title="file"
                  width="100%"
                  height="600"
                  style={{
    paddingTop: '0px'
  }}
                  />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;