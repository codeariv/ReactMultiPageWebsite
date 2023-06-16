import React from "react";
import recordtwo from './stripes.png';
import Person from './Person'
import resumepdf from './david-melkonian-resume.pdf'

function Resume() {
  return (
    <div className="home">
      <img className="img-art-two position-fixed" src={recordtwo} alt="vinyl artwork" />
      <div className="container">
        <div className="row my-3">
          <div className="col-lg-12 mx-0 p-4 shadow-lg rounded">
            <div className="row">
              <div className="col-lg-12 mb-0">
                <Person />
                <h2 className="col-lg-12 p-0 mb-0 page-title">Resume</h2>
              </div>
            </div>

            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card mb-0">
              <h3 className="mb-3 p-0">
                  My Resume (<a href={resumepdf} download>Download</a>)
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