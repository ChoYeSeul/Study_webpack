// 참고자료 ㅣ https://velog.io/@kim-jaemin420/CRA%EC%9D%98-%EC%9B%90%EB%A6%ACbabel-webpack-%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B0#%EC%B0%B8%EA%B3%A0%EB%A1%9C-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-webpack-%EC%A7%80%EC%8B%9D

// 참고자료 | https://velog.io/@_uchanlee/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9B%B9%ED%8C%A9%EC%9C%BC%EB%A1%9C-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0without-CRA

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
