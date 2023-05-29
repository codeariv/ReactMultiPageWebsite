import React from "react";
import Person from './Person'
import compthree from './compthree.png';
import compfour from './compfour.png';
import compfive from './compfive.png';
import compsix from './compsix.png';
import renshopping from './renshopping.png';
import renlogin from './renlogin.png';
import deltaportal from './deltaportal.png';
import deltaportaltwo from './deltaportaltwo.png';
import wireone from './wireone.jpg';
import wiretwo from './wiretwo.jpg';
import wirethree from './wirethree.jpg';
import wirefour from './wirefour.jpg';
import wirefive from './wirefive.png';
import wiresix from './wiresix.jpg';
import artgear from './artgear.png';
import artlockup from './artlockup.png';
import artdots from './artdots.png';
import artlionsblack from './artlionsblack.png';
import artstag from './artstag.png';
import arthands from './arthands.png';
import artgenuine from './artgenuine.png';
import recordone from './recordone.png';
import recordtwo from './stripes.png';
import artprizesearch from './artprizesearch.png';
import artprizevenue from './artprizevenue.png';
import onuone from './onuone.png';
import onutwo from './onutwo.png';
import onuthree from './onuthree.png';
import onufour from './onufour.png';
import onufive from './onufive.png';
import onusix from './onusix.png';
import onupdf from './onu-one-uxui-plan.pdf';
import onuog from './onuog.png';
import onuogtwo from './onuogtwo.png';
import onuogthree from './onuogthree.png';


function Samples() {
  return (

    <div className="home">
      <img className="img-art-two" src={artgear} alt="artwork" />
      <div className="container">
        <div className="row my-5">
        <div className="col-lg-12 mx-0 p-4 shadow-lg rounded">
            <div className="row">
              <div className="col-lg-12">
                <Person />
                <h2 className="col-lg-12 p-0 page-title">Samples</h2>
              </div>
            </div>
            <div className="row my-5 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card">
                <h3 className="mb-3">
                  Projects&nbsp;&nbsp;&nbsp;
                </h3>
                <p>These are roles and projects within which I have participated.</p>
                <small>
                  <a href="https://docs.google.com/document/d/194Y7nvZMypnbAiT-F51o4PI05_dS7X7i26euKBHTyTA/edit?usp=sharing">Resume</a>
                </small>
              </div>
              <div className="col-lg-6 p-4">
                <img className="grow sample-img" src={artprizesearch} alt="artwork" />
                <img className="grow sample-img" src={artprizevenue} alt="artwork" />
              </div>
              <div className="col-lg-6 mt-5 d-flex flex-column justify-content-center">
                <small className="mb-0">project</small>
                <a className="h5 font-weight-bold" href="https://www.artprize.org/">ArtPrize</a><br />
                <small className="mb-0">role</small>
                <p className="mb-2">Senior Application Developer</p><br />
                <small className="mb-0">contributions</small>
                <ul className="mb-5 pt-0 pb-4 py-0">
                  <li className="mb-4">Created responsive front end for a .NET application with Razor templates</li>
                  <li className="mb-4">Collaborated with creative team to implement the design</li>
                  <li className="mb-4">Interpreted wireframes to illustrate workflow</li>
                  <li className="mb-4">Created working prototype of an Umbraco CMS</li>
                  <li className="mb-4">Implemented a carousel mechanism to prominently display the artists' work</li>
                  <li className="mb-4">Built a Masonry layout for search results (a la Pinterest)</li>
                  <li className="mb-4">Designed and built a banner and edit button treatment for all editing pages</li>
                  <li className="mb-4">Created style and layout for admin pages, confirmation messages, and alerts</li>
                  <li className="mb-4">Maintained a design system including all controls and typography</li>
                </ul>
              </div>
              <div className="col-lg-6 mt-5 d-flex flex-column justify-content-center">
                <small className="mb-0">project</small>
                <a className="h5 font-weight-bold" href="https://www.mysmilecoverage.com/">Delta Dental of Michigan - Individual Shopping platform</a><br />
                <small className="mb-0">role</small>
                <p className="mb-2">Senior Application Developer</p><br />
                <small className="mb-0">contributions</small>
                <ul className="mb-6">
                  <li className="mb-4">Created responsive front end for an Angular application using Bootstrap and significant custom HTML and CSS.</li>
                  <li className="mb-4">Created Freemarker templates for a Magnolia CMS</li>
                  <li className="mb-4">Created alternate theme for Renaissance company</li>
                  <li className="mb-4">Managed UX/UI team at onset of Roosevelt Solutions SaaS project</li>
                  <li className="mb-4">Ran the UX/UI council at Delta Dental</li>
                  <li className="mb-4">Performed accessibility reviews and implemented technical solutions for any issues</li>
                  <li className="mb-4">Built a living style guide / design system for reference when project was initiated</li>
                  <li className="mb-4">Collaborated with design agency to ensure design systems are technically feasible</li>
                </ul>
              </div>
              <div className="col-lg-6 mb-5">
                <img className="grow sample-img" src={deltaportal} alt="artwork" />
                <img className="grow sample-img" src={renshopping} alt="artwork" />
              </div>
              <div className="col-lg-6 mt-5">
                <img className="grow sample-img" src={deltaportaltwo} alt="artwork" />
                <img className="grow sample-img" src={renlogin} alt="artwork" />
              </div>
              <div className="col-lg-6 mt-5 d-flex flex-column justify-content-center">
                <small className="mb-0">project</small>
                <a className="h5 font-weight-bold" href="https://www.memberportal.com/">Delta Dental of Michigan - Member Portal</a><br />
                <small className="mb-0">role</small>
                <p className="mb-2">Senior Application Developer</p><br />
                <small className="mb-0 ">contributions</small>
                <ul className="mb-5">
                  <li className="mb-5">Extended the individual shopping design system using Angular with custom HTML and CSS</li>
                  <li className="mb-5">Troubleshooting JavaScript/HTML/CSS/etc</li>
                  <li className="mb-5">Conducted code reviews and desk checks</li>
                  <li className="mb-5">Conducted heuristic evaluations of product to identify user experience issues</li>
                  <li className="mb-4">Created the digital accessibility discipline for Delta Dental</li>
                  <li className="mb-5">Performed accessibility reviews and implemented technical solutions for discovered issues</li>
                </ul>
              </div>
            </div>

            <div className="row my-5 mx-1 pb-5 sample-row d-flex">
              <div className="col-lg-12 text-card">
                <h3 className="mb-3">
                  <a href="https://dribbble.com/davemelk100" target="_blank" rel="noopener noreferrer">Mobile App game concept</a>
                </h3>
                <p>This group listening app concept began organically as a game we would play on road trips.</p>
                <p>Project is fully conceptualized and is in progress.</p>
              </div>
              <div className="col-lg-6 comp-cols">
                <a href="https://dribbble.com/shots/20622909-mobile-game-concept" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={compfour} alt="artwork" /></a>
              </div>
              <div className="col-lg-6 comp-cols">
                <a href="https://dribbble.com/shots/20591072-mobile-app-game-concept" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={compthree} alt="artwork" /></a>
              </div>
              {/* <div className="col-lg-4 comp-cols">
              <a href="https://dribbble.com/shots/20590741-mobile-game-concept-screens" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={comptwo} alt="artwork" /></a>
            </div> */}
            </div>

            <div className="row my-5 mx-1 pb-5 sample-row d-flex">
              <div className="col-lg-12 text-card">
                <h3 className="mb-3">
                  <a href="https://dribbble.com/davemelk100" target="_blank" rel="noopener noreferrer">Mobile App ticketing system</a>
                </h3>
                <p>This was a POC for a potential market offering.</p>
                <p>Project is complete but only available to internal employees.</p>
                <p>Check out the <a href="https://www.figma.com/proto/IaGShRQDs0RRld07kLP9G5/dewpoint-mobile-app-copy-2?node-id=201-315&scaling=min-zoom&page-id=201%3A45&starting-point-node-id=201%3A315&hide-ui=1" target="_blank" rel="noopener noreferrer">protype app.</a></p>
              </div>
              <div className="col-lg-5 comp-cols">
                <a href="https://dribbble.com/shots/20590937-mobile-app-ticketing-system-concept" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={compfive} alt="artwork" /></a>
              </div>
              <div className="col-lg-7 comp-cols">
                <a href="https://dribbble.com/shots/20590951-mobile-app-ticketing-system-concept" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={compsix} alt="artwork" /></a>
              </div>
            </div>

            <div className="row my-5 mx-1 pb-5 sample-row d-flex">
              <div className="col-lg-12 text-card">
                <h3 className="mb-3">
                  <a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf" target="_blank" rel="noopener noreferrer">Onu One 3D Software</a>
                </h3>
                <p>These are annoted wireframes with color and placeholder text.</p>
              </div>
              <div className="col-lg-6 comp-cols">
                <img className="grow sample-img" src={onuone} alt="artwork" />
              </div>
              <div className="col-lg-6 comp-cols">
                <img className="grow sample-img" src={onutwo} alt="artwork" />
              </div>
              <div className="col-lg-6 comp-cols">
                <img className="grow sample-img" src={onuthree} alt="artwork" />
              </div>
              <div className="col-lg-6 comp-cols">
                <img className="grow sample-img" src={onufour} alt="artwork" />
              </div>
              <div className="col-lg-6 comp-cols">
                <img className="grow sample-img" src={onufive} alt="artwork" />
              </div>
              <div className="col-lg-6 comp-cols">
                <img className="grow sample-img" src={onusix} alt="artwork" />
              </div>
              <div className="col-lg-6 comp-cols">
                <img className="grow sample-img" src={onuog} alt="artwork" />
              </div>
              <div className="col-lg-6 comp-cols">
                <img className="grow sample-img" src={onuogtwo} alt="artwork" />
              </div>
              <div className="col-lg-6 comp-cols">
                <img className="grow sample-img" src={onuogthree} alt="artwork" />
              </div>
              </div>


            <div className="row my-5 mx-1 pb-5 sample-row d-flex">
              <div className="col-lg-12 text-card">
                <h3 className="mb-3">
                  <a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf" target="_blank" rel="noopener noreferrer">Various Wirefames/Sketches</a>
                </h3>
                <p>These are random lo-fi wireframes I've made over the years.</p>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={wireone} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={wiretwo} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={wirethree} alt="artwork" /></a>
              </div>
              <div className="col-lg-6 comp-cols">
                <a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={wirefour} alt="artwork" /></a>
              </div>
              <div className="col-lg-6 comp-cols">
                <a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={wirefive} alt="artwork" /></a>
              </div>
              <div className="col-lg-12 comp-cols">
                <a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={wiresix} alt="artwork" /></a>
              </div>
            </div>



            <div className="row my-5 mx-1 pb-5 sample-row d-flex">
              <div className="col-lg-12 text-card">
                <h3 className="mb-3">
                  Various Digital Art&nbsp;&nbsp;&nbsp;
                </h3>
                <p>These are various cover art concepts and digital assets.</p>
                <small><a href="https://dribbble.com/davemelk100">Dribble Portfolio</a></small>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://dribbble.com/shots/20590753-7-inch-record-picture-disc-concept" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={recordtwo} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://dribbble.com/shots/21583976-Hands-disappear" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={recordone} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://dribbble.com/shots/21583983-Staggered-and-Spinning-and-Multiplying" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={artstag} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://dribbble.com/shots/20590849-screen-lock-experiment" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={artlockup} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://dribbble.com/shots/20602411-all-hands" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={artdots} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://dribbble.com/shots/21583993-Small-Movements-in-a-Giant-Machine" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={artgear} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://dribbble.com/shots/20590794-band-shirt-design" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={artlionsblack} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://dribbble.com/shots/21583998-All-Hands" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={arthands} alt="artwork" /></a>
              </div>
              <div className="col-lg-4 comp-cols">
                <a href="https://dribbble.com/shots/21584003-Seems-Authentic-I-mean-right" target="_blank" rel="noopener noreferrer"><img className="grow sample-img" src={artgenuine} alt="artwork" /></a>
              </div>
            </div>


            <div className="row my-5 mx-1 p-4 sample-row d-flex">
              <div className="col-lg-12">
                <small className="mb-0">sample links</small><br />
                <ul className="list-unstyled">
                  <li className="mb-4"><a href="https://www.figma.com/proto/IaGShRQDs0RRld07kLP9G5/dewpoint-mobile-app-copy-2?node-id=201-315&scaling=min-zoom&page-id=201%3A45&starting-point-node-id=201%3A315&hide-ui=1">Mobile App Prototype - Help Desk</a></li>
                  <li className="mb-4"><a href="https://davemelkwork.com/frame">Mobile App Prototype - Rx App</a></li>
                  <li className="mb-4"><a href="https://davemelkcom.files.wordpress.com/2021/10/onu-one-uxui-plan.pdf">3D Software UX Plan</a></li>
                  <li className="mb-4"><a href={onupdf} download="onu-one-uxui-plan" target="_blank" rel="noopener noreferrer">3D Software UX Plan pt 2</a></li>
                  <li className="mb-4"><a href="https://davemelkcom.files.wordpress.com/2021/10/uxui-solution-examples.pdf">UX/UI Solution Use Cases</a></li>
                  <li className="mb-4"><a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf">UX/UI Random Sketches</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}
export default Samples;