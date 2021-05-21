import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const heading = <div><h1 style={{textAlign: 'center',color: '#AACCFF'}}>Reandom number Generator </h1></div>



ReactDOM.render(heading,document.getElementById('head'))

ReactDOM.render(<App />,document.getElementById('root'))

reportWebVitals();
