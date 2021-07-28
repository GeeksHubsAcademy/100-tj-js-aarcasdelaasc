function geekshubs(index) {
    let result = ''
    let counter = 0;

    const getValue = (number) => {
        let result = ''
        if(number % 3 === 0){
            result += 'Geeks'
        }

        if(number % 5 === 0){
            result += 'Hubs'
        }

        if(!result.length){
            result = number
        }

        return result
    }
    if(index && !isNaN(Number(index))){
        for (let i = index; i > 0; i--) {
            counter++
            result += `${getValue(counter)}\n`
        }
    }
    return result;
}
module.exports = geekshubs;
