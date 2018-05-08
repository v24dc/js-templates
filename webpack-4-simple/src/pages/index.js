import '../styles/main.scss';
import 'normalize.css';

console.log("Hello! Test!");

if (module.hot) {
  console.log(module);
  module.hot.accept();
}
