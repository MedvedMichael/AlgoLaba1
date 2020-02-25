const shell_sort = (length)=>{
    console.log(getRowOnNumbersByTokuda(length))
}

const getRowOnNumbersByTokuda = (length)=>{
    result = []
    iter=1
    data = 1
    while (data<length){
        result.push(data)
        iter++
        data = Math.ceil(1.0 / 5 * (9 * Math.pow(9.0 / 4, iter - 1) - 4))
    } 

    return result;
}

module.exports = shell_sort