import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'normalize.css';
import '../styles/main.scss';
import { App } from '../components/App';

ReactDOM.render(
  <App message="Hello from TS and React" />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
