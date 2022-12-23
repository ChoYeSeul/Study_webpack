module.exports = {};

// node에서 path를 가져온다.
const path = require("path");
const { JavascriptModulesPlugin } = require("webpack");

module.exports = {
  name: "wordrelay-setting",
  // mode -> production(실서비스), development(개발용)
  mode: "development",
  // eval -> 빠르게 하겠다
  devtool: "eval",
  // resolve -> entry에서 확장자 이름을 제외해도 되게끔 작성해주기
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        // js, jsx 파일에 babel-loader 적용
        test: /\.jsx?/,
        // babel-loader -> 최신 문법 다운그레이드
        loader: "babel-loader",
        // babel의 욥션들
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  // 입력(** 중요)
  entry: {
    // 아래 파일을 합치겠다. 지금은 client에서 wordRelay를 불러오기 때문에 client만 작성.
    app: ["./client"],
  },
  // 출력(** 중요)
  output: {
    // path.join -> 경로 합치기
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
