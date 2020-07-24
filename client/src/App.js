import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles
          style={{position: 'absolute', left: 0}}
          params={{
              particles: {
                  number: {
                      value: 10,
                      density: {
                          enable: true,
                          value_area: 190,
                      }
                  },
              },
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
              <div className={'d-flex position-relative w-35 justify-content-center  mt-3'}>
                  <input className={'ui-input'} type="text" placeholder={'Your URL Goes Here'}/>
                  <button><i className="fas fa-chevron-right"></i></button>
              </div>
              <p className={'text-white mt-5 w-50'}>Mighty URL Shortener is a service that takes long URLs and squeezes them into fewer characters to make a link that is easier to share tweet email to friends.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
