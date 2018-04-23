import "./style.scss";
console.log("Hello! Test!");

if (module.hot) {
  console.log(module);
  module.hot.accept();
}
