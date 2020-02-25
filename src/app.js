const readline = require('readline')
const shell_sort = require('./shell-sort')
const chalk = require('chalk')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input length: ", (length) => {
    array = Array.from({ length }, () => Math.round(Math.random() * (length / 2)))

    sortedArray = shell_sort(array)
    printArray(array)
    printArray(sortedArray)

    rl.close();
})

const printArray = (array) => {
    let output = '[ '
    array.forEach((element, index) => {
        output += chalk.greenBright.italic(element) + ((index == array.length - 1) ? ' ' : ', ')
    })
    output += ']'
    console.log(output)
}