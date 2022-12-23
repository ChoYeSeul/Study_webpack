// npm으로 설치한 react와 react-dom을 불러온다.
const React = require("react");
const ReactDom = require("react-dom");

const WordRelay = require("./dist/wordRelay");

ReactDom.render(<WordRelay />, document.querySelector("#root"));
