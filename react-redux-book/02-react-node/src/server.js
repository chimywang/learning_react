import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';


/**
 * use renderToString  to render in node.js
 */
const appHTML = renderToString(<App />);

console.log(appHTML);
