const resultReadFile = require('fs')
  .readFileSync(`${__dirname}/../../jwt.evaluation.key`, { encoding: 'utf8' })
  .trim();

module.exports = resultReadFile;
