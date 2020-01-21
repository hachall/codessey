import React, { Component } from 'react'

class Home2Desktop extends Component {


  render() {


    return (
      <div className="home-section-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FDECF2" fill-opacity="1" d="M0,128L120,154.7C240,181,480,235,720,224C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <div className="section-2-content">
          <div className="section-2-box">
            <div className="section-2-left">
              <div className="section-2-left-inner">Why Learn Python?</div>
            </div>
            <div className="section-2-right">
              <ul>
                <li><span className="python-titles pink-text bold-text" >Easy to learn.</span> The <a className="link-text" href="">no.1 introductory teaching language</a> It uses simple, <span className="bold-text">easy-to-follow syntax </span>which is great for beginners.</li>
                <li><span className="python-titles pink-text bold-text" >Versatile and powerful.</span> If you learn the basics of Python, you’ll be able to create almost anything you want. Companies like Google, Dropbox, Spotify, Reddit, Instagram and Netflix all rely heavily on Python. </li>
                <li><span className="python-titles pink-text bold-text" >Minimal set up.</span> Python runs on all modern operating systems, requires minimal effort to set up and is all open-source, meaning it’s <span className="bold-text">free to use!</span></li>
                <li><span className="python-titles pink-text bold-text" >Popular</span> According to the IEEE, Python is <span className="bold-text">the best programming language</span> and it was the only language to score 100% in the <a className="link-text" href="">survey rankings.</a> Python also has a huge online community which is vital for receiving help as a developer. </li>
                <li><span className="python-titles pink-text bold-text" >Careers</span> Python is the <span className="bold-text">2nd most demanded skill </span> on Angel List and the skill with the highest average salary offered.</li>
              </ul>
            </div>
          </div>
          <div className="section-2-img-box">
            <img className="section-2-img" src="assets/images/undraw_noted_pc9f.svg" alt=""/>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FDECF2" fill-opacity="1" d="M0,96L120,85.3C240,75,480,53,720,42.7C960,32,1200,32,1320,32L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </div>
    )
  }
}

export default Home2Desktop;
