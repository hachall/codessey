import React, {Component} from 'react'
import { Link} from 'react-router-dom';
import Particles from 'react-particles-js';

const params = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#3e4478"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3e4478",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
const hamish_url = "assets/images/tutoring_photo.jpg"
const laura_url = "assets/images/laura_photo.png"

class Network extends Component {

  render() {
    return (
      <div>
      <div className="network-background">
        <Particles className="particle-background" width="100%" height="100%" params={params}/>
        <div className="grid-wrapper">
          <div className="parent">
            <div className="grid-centre div1">
              <div className="centre-inner">
                <div className="grid-text">
                  Have any tech related <span className="pink-text bold-text">ideas</span>, projects or <span className="blue-text">questions</span>?
                </div>
                <div className="grid-text">
                  Need any guidance or advice?
                </div>
                <Link to="/contact">
                  <div className="grid-button">Drop us a message!</div>
                </Link>
              </div>
            </div>
            <div className="net-avatar div2"> </div>
            <div className="net-avatar div2"></div>
            <div className="net-avatar div3"> </div>
            <div className="net-avatar div4"> </div>
            <div className="net-avatar div5"> </div>
            <div className="net-avatar div6 "></div>
            <div className="net-avatar div7"> </div>
            <div className="net-avatar div8"> </div>
            <div className="net-avatar div9"> </div>
            <div className="net-avatar div10"> </div>
            <div className="net-avatar div11"> </div>
            <div className="net-avatar div12"> </div>
            <div className="net-avatar div13"> </div>
            <div className="net-avatar div14"> </div>
            <div className="net-avatar div15"> </div>
            <div style={{backgroundImage: `url(${hamish_url})`}} className="net-avatar div16">
               <div className="overlay">
                Oxford Engineer & Imperial Computer Scientist
               </div>
            </div>
            <div className="net-avatar div17"> </div>
            <div className="net-avatar div18"> </div>
            <div className="net-avatar div19"> </div>
            <div className="net-avatar div20"> </div>
            <div className="net-avatar bnw div21" style={{backgroundImage: `url(${laura_url})`}}>
              <div className="overlay">
                Kubrick Data Scientist
               </div>
            </div>
            <div className="net-avatar div22"> </div>
            <div className="net-avatar div23"> </div>
            <div className="net-avatar div24"> </div>
            <div className="net-avatar div25"> </div>
            <div className="net-avatar div26"> </div>
            <div className="net-avatar div27"> </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Network;
