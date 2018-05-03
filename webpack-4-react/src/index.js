import './styles/main.scss';
import 'normalize.css';
import App from './components/App';
import React from 'react';
import { render } from 'react-dom';

render(<App />, document.getElementById('app'));

if (module.hot) {
  console.log(module);
  module.hot.accept();
}
