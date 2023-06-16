import React from "react";
import Person from './Person'
import recordtwo from './stripes.png';
import dsone from './ds1.png';
import dstwo from './ds2.png';
import dsthree from './ds3.png';
import dsfour from './ds4.png';
import dsfive from './ds5.png';
import dssix from './ds6.png';
import dsseven from './ds7.png';
import dseight from './ds8.png';
import dsnine from './ds9.png';
import dsten from './ds10.png';
import dseleven from './ds11.png';
import dstwelve from './ds12.png';
import dsthirteen from './ds13.png';

function Patterns() {
  return (

    <div className="home">
      <img className="img-art-two position-fixed" src={recordtwo} alt="artwork" />
      <div className="container">
      <div className="row my-3">
          <div className="col-lg-12 mx-0 p-4 shadow-lg rounded">
            <div className="row">
              <div className="col-lg-12 mb-0">
                <Person />
                <h2 className="col-lg-12 p-0 mb-0 page-title">Patterns</h2>
              </div>
            </div>
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card mb-3">
                <h3 className="mb-0 p-0">Patterns</h3>
                <p className="text-dark font-weight-normal">
                  I hand-coded the HTML/CSS for this SaaS design system / pattern library as designed by a design agency.
                </p>
                </div>
              <div className="col-lg-12">
                  <img className="design-system-img" src={dsone} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dstwo} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dsthree} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dsfour} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dsfive} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dssix} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dsseven} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dseight} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dsnine} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dsten} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dseleven} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dstwelve} alt="vinyl artwork" />
              </div>
              <div className="col-lg-12">
                <img className="design-system-img" src={dsthirteen} alt="vinyl artwork" />
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Patterns;