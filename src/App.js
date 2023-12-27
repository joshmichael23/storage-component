import logo from './logo.svg';

import file from './images/icon-document.svg';
import folder from './images/icon-folder.svg';
import upload from './images/icon-upload.svg';

import fylo from './images/logo.svg';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='main-content'>
          <img src={fylo}></img>
          <div className='content-buttons'>
            <button><img src={file}></img></button>
            <button><img src={folder}></img></button>
            <button><img src={upload}></img></button>
          </div>
        </div>
        <div className='sub-content'>
          <div className='popUp'>
            <h1>185</h1> <p>GB LEFT</p>
            <div className='triangle'></div>
          </div>
          <p className='desc'>You’ve used <span>815 GB</span> of your storage</p>
          <input min="1" max="12" value="9" type='range'></input>
          <p className='labels'><span>0 GB</span> <span>1000 GB</span></p>
        </div>
      </div>

    </div>
  );
}

export default App;
