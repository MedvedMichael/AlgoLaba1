const shell_sort = async(inputArray) => {
    let array = await inputArray.slice()

    numbers = getRowOnNumbersByTokuda(array.length)
    numbers.forEach(element => {
        sortArrayOnDeltaNumbers(array, element)
    });

    return array;
}
const getRowOnNumbersByTokuda = (length) => {
    resultRow = []
    iter = 1
    data = 1
    while (data < length) {
        resultRow.push(data)
        iter++
        data = Math.ceil(1.0 / 5 * (9 * Math.pow(9.0 / 4, iter - 1) - 4))
    }
    return resultRow;
}

const sortArrayOnDeltaNumbers = (array, number) => {
    for (let i = 0; i < number; i++) {
        for (let j = i + number; j < array.length; j += number) {
            const key = array[j]
            let k = j - number

            while (k >= i && array[k] > key) {
                array[k + number] = array[k]
                k -= number
            }
            array[k + number] = key
        }
    }
}

module.exports = shell_sort