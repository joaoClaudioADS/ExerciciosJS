function parImpar(n) {
    if (n == 0) {
        return '0'
    } else
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parImpar(0)
console.log(res)