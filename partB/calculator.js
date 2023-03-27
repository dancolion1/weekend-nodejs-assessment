const yargs = require('yargs');

const argv = yargs
  .command('$0 <num1> <operator> <num2>', 'perform a calculation', (yargs) => {
    yargs
      .positional('num1', {
        type: 'number',
        describe: 'the first number',
      })
      .positional('operator', {
        type: 'string',
        describe: 'the operator (+, -, *, /)',
      })
      .positional('num2', {
        type: 'number',
        describe: 'the second number',
      });
  })
  .help().argv;

const { num1, operator, num2 } = argv;

let result;
switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    console.error(`Invalid operator: ${operator}`);
    process.exit(1);
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
