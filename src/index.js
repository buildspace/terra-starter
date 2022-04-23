import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';

const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

ReactDOM.render(
  <React.StrictMode>
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>

        <div className="footer-container">
          <img
            alt="Twitter Logo"
            className="twitter-logo"
            src="/twitter-logo.svg"
          />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`Made with @${TWITTER_HANDLE}`}</a>
        </div>
      </div>

  </React.StrictMode>,
  document.getElementById('root')
);
