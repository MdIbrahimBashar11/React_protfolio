import React from 'react'
import './home.css';
import img1 from '../../imgs/profile.png';

function HomeContent() {
  return (
    <div className="container-fluid bg-light my-6 mt-0" id="home">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                    <h3 className="text-primary mb-3">I'm</h3>
                    <h1 className="display-3 mb-3">Jully Winslet</h1>
                    {/* <h2 className="typed-text-output d-inline"></h2> */}
                    <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                    <div className="d-flex align-items-center pt-5">
                        <a href="" className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                     
                        
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={img1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContent