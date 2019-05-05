import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/core';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const globalStyle = css`
@import url('https://fonts.googleapis.com/css?family=Lato');

body {
  margin: 0;
  padding: 0;
  font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.Fragment>
    <Global styles={globalStyle} />
    <App />
  </React.Fragment>,
  document.querySelector('#root'),
);
serviceWorker.unregister();
