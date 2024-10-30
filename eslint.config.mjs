import eslintConfig from 'eslint-config-airbnb';

export default [
  // prettier
  ...eslintConfig.base,
  ...eslintConfig.react,
  ...eslintConfig.next,
  ...eslintConfig.node,
  ...eslintConfig.tailwindcss,
  ...eslintConfig.typescript,
];
