import './styles/main.scss';
console.log('Hello! Test!');

if (module.hot) {
  console.log(module);
  module.hot.accept();
}
