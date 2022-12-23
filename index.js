// 1. npm 설치
// -> webpack을 사용하려면 node(== 자바스크립트 실행기)가 필요하다.
// -> $ npm init -y
// : 설치하니 package.json이 자동으로 만들어졌다.

// + react 사용을 위해 react와 react-dom을 설치
// -> $ npm i react react-dom
// : 설치하니 node_modules와 package-lock.json이 만들어졌다.

// 2. webpack 설치
// $ npm i -D webpack webpack-cli
// -> webpack-cli는 웹팩을 더 쉽게 사용할 수 있도록 다양한 명령을 제공한다. (터미널에서 webpack 커맨드를 실행할 수 있게 해준다)
// -> -D는 개발용으로만 사용한다는 뜻이다.

// 3. webpack.config.js & client.jsx 파일 생성
// -> webpack.config.js 파일 생성 및 코드 작성
// -> client.jsx 생성(react를 사용할 것이기 때문에, jsx를 쓰는 것이 편함)

// + client.jsx엔 번들링 할 파일들을 추가추가 해야하는 듯

// + webpack.config.js 추가 작성

// (!) : 여기까지 한 후 $npx webpack을 실행하였더니 아래와 같은 오류가 뜬다.
// -> [webpack-cli] Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
// -> filename을 fliname으로 오타내서 난 문제였다. 머쓱ㅎ;

// + $npx webpack을 실행하니 dist 폴더에 app.js가 생성되었다.

// 4. babel 설치
// 바벨의 기본 기능 설치
// -> $npm i -D @babel/core

// 최신 문법 js를 다운그레이드 시켜주는 기능
// -> $npm i -D @babel/preset-env

// jsx 변환해주는 기능
// -> $npm i -D @babel/preset-react

// 바벨과 webpack 연결해주는 기능
// -> $npm i -D babel-loader

// + webpack.config.js에 module 추가!

// 이후 npx webpack 한번 더 해주면 끝!

// (!) : 여기까지 했더니 오류가 뜬다.
// -> [webpack-cli] Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
//    configuration.entry['module'] has an unknown property 'rules'. These properties are valid
// rules를 읽을 수 없다는 뜻 같아 다시 확인해보니, module을 entry안에 쓰는 실수를 했다.

// (!) : 새로운 에러가 뜬다.
// -> [ERR_MODULE_NOT_FOUND]: Cannot find package '@babel/preset-plugin-proposal-class-properties' imported from
// webpack.config.js에서 babel 옵션을 적을 때, presets와 plugins의 작성에 혼동이 있었다. 다시 작성해주니 잘 작동된다!
