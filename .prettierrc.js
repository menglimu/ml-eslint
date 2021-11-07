module.exports = {
  endOfLine: "auto", // 换行格式不做检查，换行格式有lf、cr，由于历史原因，windows下和linux下的文本文件的换行符不一致。
  semi: true, // 末尾的分号
  printWidth: 120, // 单行长度，默认80
  singleQuote: false, // 单引号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  trailingComma: "es5", // 在对象或数组最后一个元素后面是否加逗号
  jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
  arrowParens: "avoid" // 箭头函数，只有一个参数的时候，也需要括号
};