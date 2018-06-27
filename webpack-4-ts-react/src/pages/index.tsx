import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../styles/main.scss';
// import 'normalize.css';

import { App } from '../components/App';

ReactDOM.render(
  <App message="Hello from TS and React" />,
  document.getElementById('app')
);
