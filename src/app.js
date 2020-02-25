const readline = require('readline')
const shell_sort = require('./shell-sort')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Input length: ",(answer)=>{
      shell_sort(answer)
      rl.close();
  })