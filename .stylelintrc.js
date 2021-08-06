module.exports = {
  root: true,
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "value-keyword-case": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["function", "if", "else", "each", "for", "include", "mixin"],
      },
    ],
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["composes"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
};
