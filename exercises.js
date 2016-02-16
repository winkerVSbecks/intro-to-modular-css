import React from 'react';
import { render } from 'react-dom';
import Exercises from './exercises/index.js';
require('./exercises/index.css');

render(<Exercises />, document.getElementById('root'));
