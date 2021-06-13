module.exports = {
  root: true,
  env: { node: true },
  globals: {},
  extends: ['alloy', 'alloy/vue', 'alloy/typescript'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.css', '*.scss']
      // processor: 'a-plugin/markdown'
    }
  ],
  parserOptions: {},
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // 换行格式不做检查，换行格式有lf、cr，由于历史原因，windows下和linux下的文本文件的换行符不一致。
        printWidth: 120, // 单行长度，默认80
        singleQuote: true, // 单引号
        jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
        trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号
        jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
        arrowParens: 'avoid' // 箭头函数，只有一个参数的时候，也需要括号
        // bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
        // semi: false, 分号结尾
      }
    ]
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // semi: [2, 'never'], //语句强制分号结尾
    // 'no-prototype-builtins': 0, // 禁止使用对象原型上的部分方法
    // 'vue/component-name-in-template-casing': [
    //   2,
    //   'kebab-case',
    //   {
    //     // 组件名在template中的书写方式
    //     registeredComponentsOnly: true, // 只检测注册的组件
    //     ignores: []
    //   }
    // ],
    // eqeqeq: [1, 'allow-null'], // 使用 === 替代 ==
    // '@typescript-eslint/camelcase': [0, { properties: 'always' }],
    // // "no-unused-vars": [0],
    // // "@typescript-eslint/no-unused-vars": [1],
    // '@typescript-eslint/no-var-requires': [0]
  }
};
