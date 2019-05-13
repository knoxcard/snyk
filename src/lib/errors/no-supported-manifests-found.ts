import chalk from 'chalk';

export const NO_SUPPORTED_MANIFESTS_FOUND = (root) =>
  'Could not detect supported target files in ' + root +
  '.\nPlease see our documentation for supported languages and ' +
  'target files: ' +
  chalk.underline(
    'https://support.snyk.io/hc/en-us/articles/360000911957-Language-support',
  ) +
  ' and make sure you are in the right directory.';
