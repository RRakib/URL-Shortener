import React, {useState} from 'react';
import './App.css';
import Axios from 'axios';
import Particles from 'react-particles-js';

function App() {

    const [url, setUrl] = useState("");
    const [haveURL, setHaveURL] = useState(null);

    const submitUrl = async () => {
        let response = await Axios.post('http://localhost:5000/url', {url});
        setHaveURL(response.data.url)
    };

    const handleChange = (e) => {
        const {value} = e.target;
        setUrl(value);
    };


  return (
    <div className="App">
      <Particles
          style={{position: 'absolute', left: 0}}
          params={{
              "particles": {
                  "number": {
                      "value": 150,
                      "density": {
                          "enable": true,
                          "value_area": 1803.4120608655228
                      }
                  },
                  "color": {
                      "value": "#ffffff"
                  },
                  "shape": {
                      "type": "circle",
                      "polygon": {
                          "nb_sides": 4
                      },
                      "image": {
                          "src": "img/github.svg",
                          "width": 500,
                          "height": 500
                      }
                  },
                  "opacity": {
                      "value": 0.5008530152163807,
                      "random": false,
                      "anim": {
                          "enable": true,
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
                      "distance": 0,
                      "color": "#ffffff",
                      "opacity": 0.3687847739990702,
                      "width": 0.6413648243462091
                  },
                  "move": {
                      "enable": true,
                      "speed": 6,
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
                  "detect_on": "window",
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      },
                      "onclick": {
                          "enable": false,
                          "mode": "bubble"
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
                          "distance": 100,
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
          }}
      />
      <div className={'h-75 position-relative ui-body'}>
          <nav className={'ui-nav p-2'}>
              <div className="container">
                  <div className="row ">
                      <div className={'col-8'}>
                          <h2 className={'text-white text-left'}>URL Shortener</h2>
                      </div>
                      <div className={'col-4 align-items-center d-flex justify-content-between'}>
                          <h6 className={'text-white m-0 p-0'}>Home</h6>
                          <h6 className={'text-white m-0 p-0'}>About</h6>
                          <h6 className={'text-white m-0 p-0'}>Contact</h6>
                      </div>
                  </div>
              </div>
          </nav>
          <div className="body d-flex flex-column justify-content-center align-items-center h-100">
              <p className="display-4 text-white">
                  URL Shortener
              </p>
              {haveURL ? <div className={'d-flex position-relative w-35 justify-content-center  mt-3'}>
                  <input disabled={true} onChange={handleChange} className={'ui-input'} type="text" placeholder={'Your URL Goes Here'} value={haveURL}/>
                  <a href={haveURL} target={'_blank'}><b>GO</b></a>
              </div> : <div className={'d-flex position-relative w-35 justify-content-center  mt-3'}>
                  <input onChange={handleChange} className={'ui-input'} type="text" placeholder={'Your URL Goes Here'}/>
                  <button onClick={submitUrl}><i className="fas fa-chevron-right"></i></button>
              </div>}
              <p className={'text-white mt-5 w-50'}>URL Shortener is a service that takes long URLs and squeezes them into fewer characters to make a link that is easier to share tweet email to friends.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
