import React from "react";
import recordtwo from './stripes.png';
    
    function Samples() {
      return (

<div className="home">
  <img className="img-art-two" src={recordtwo} alt="vinyl artwork" />
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 mb-3">
            <small>person</small><br />
              <h1 className="col-lg-12 p-0 mb-3">David Melkonian</h1>
              <small>page</small><br />
              <h2 className="col-lg-12 p-0 mb-3 page-title">Samples</h2>
            </div>
          </div>
          <div className="mb-2">
            <small className="mb-0">samples</small><br/>
              <ul className="list-unstyled">
                <li><a href="https://www.figma.com/proto/IaGShRQDs0RRld07kLP9G5/dewpoint-mobile-app-copy-2?node-id=201-315&scaling=min-zoom&page-id=201%3A45&starting-point-node-id=201%3A315&hide-ui=1">Mobile App Prototype - Help Desk</a></li>
                <li><a href="https://davemelkwork.com/frame">Mobile App Prototype - Rx App</a></li>
                <li><a href="https://davemelkcom.files.wordpress.com/2021/10/onu-one-uxui-plan.pdf">3D Software UX Plan</a></li>
                <li><a href="https://davemelkcom.files.wordpress.com/2021/10/uxui-solution-examples.pdf">UX/UI Solution Use Cases</a></li>
                <li><a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf">UX/UI Random Sketches</a></li>
              </ul>
              <small className="mb-0">project</small><br/>
              <a className="h5 font-weight-bold" href="https://www.mysmilecoverage.com/">Delta Dental of Michigan - Individual Shopping platform</a>
          </div>
          <div>
            <small className="mb-0">role</small><br/>
            <p className="mb-2">Senior Application Developer</p>
          </div>
          <small className="mb-0">contributions</small>
          <ul className="mb-5">
            <li>Created responsive front end for an Angular application using Bootstrap and significant custom HTML and CSS.</li>
            <li>Created Freemarker templates for a Magnolia Content Management System</li>
            <li>Conducted code reviews and desk checks</li>
            <li>Performed accessibility reviews and implemented technical solutions for any issues</li>
            <li>Built a living style guide for reference when project was initiated</li>
            <li>Worked with design agency to ensure designs are technically feasible</li>
          </ul>
          <div className="mb-2">
            <small className="mb-0">project</small><br/>
            <a className="h5 font-weight-bold" href="https://www.memberportal.com/">Delta Dental of Michigan - Member Portal</a>
          </div>
          <div>
            <small className="mb-0 ">role</small><br/>
            <p className="mb-2">Senior Application Developer</p>
          </div>
          <small className="mb-0 ">contributions</small>
          <ul>
            <li>Extended the individual shopping design system using Angular with custom HTML and CSS</li>
            <li>Troubleshooting JavaScript/HTML/CSS/etc</li>
            <li>Conducted code reviews and desk checks</li>
            <li>Conducted heuristic evaluations of product to identify user experience issues</li>
            <li>Performed accessibility reviews and implemented technical solutions for discovered issues</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      );
    }
    
    export default Samples;