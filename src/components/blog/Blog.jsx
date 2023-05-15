import React from "react";
import recordtwo from '../stripes.png';
    
    function Blog () {
      return (
        <div className="home">
          <img class="img-art-two" src={recordtwo} alt="vinyl artwork" />
          <div class="container">
            <div class="row my-5">
              <div class="col-lg-5 p-0">
                <div class="row">
                  <div class="col-lg-12">
                    <small>page&nbsp;&nbsp;</small><br/>
                    <h1 class="col-lg-12 p-0 mb-4">Blog</h1>
                    <small>person&nbsp;&nbsp;</small><br/>
                    <h1 class="col-lg-12 p-0 mb-3">David Melkonian</h1>
                    <small>skills&nbsp;&nbsp;</small><br/>
                    <p class="h5 col-lg-12 p-0">APPLICATION DEVELOPENT</p>
                    <p class="h5 col-lg-12 p-0">APPLICATION SOLUTIONING</p>
                    <p class="h5 col-lg-12 p-0">USER INTERFACE DEVELOPMENT</p>
                    <p class="h5 col-lg-12 p-0">USER INTERFACE DESIGN</p>
                    <p class="h5 col-lg-12 p-0">LEADERSHIP AND MENTORING</p>
                    <p class="h5 col-lg-12 p-0">TECHINCAL AND DESIGN LEADERSHIP</p>
                  </div>
                  {/* <div class="col-lg-12">
                    <p class="h1 col-lg-12 mb-5">Senior User Interface Developer and Designer. But wait - there's more.</p>
                  </div> */}
                </div>
              </div>
              
              <div class="col-lg-7 bio p-0">
            <h2 class="h4 mb-4"><a href="https://www.mysmilecoverage.com/">Delta Dental of Michigan - Individual Shopping platform</a></h2>  
            <p class="mb-0 font-weight-bold">ROLE:</p>
            <p class="mb-4">Senior Application Developer</p>
            <p class="mb-0"><span class="font-weight-bold">CONTRIBUTIONS:</span></p>
              <ul>
                <li>Created responsive front end for an Angular application using Bootstrap and significant custom HTML and CSS.</li>
                <li>Created Freemarker templates for a Magnolia Content Management System</li>
                <li>Built a living style guide for reference when project was initiated</li>
                <li>Worked with design agency to ensure designs are technically feasible</li>
                <li>Conducted code reviews and desk checks</li>
                <li>Performed accessibility reviews and implemented technical solutions for discovered issues</li>
              </ul>
            </div>
    
            
            </div>
          </div>
        </div>
      );
    }
    
    export default Blog;