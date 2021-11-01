module.exports = {
  globals: {},
  extends: ["alloy", "alloy/typescript"], // 'plugin:vue/essential'   'alloy/typescript'
  parserOptions: {},
  rules: {
    eqeqeq: [1, "allow-null"], // 使用 === 替代 ==
    // semi: [2, 'never'], // 语句强制分号结尾
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // 'no-unused-vars': 0,
        "no-undef": 0,
        "@typescript-eslint/consistent-type-assertions": 0
      },
    },
    {
      files: ["*.vue"],
      extends: ["alloy/vue", "@vue/typescript/recommended"],
      rules: {},
    },
  ],
};
