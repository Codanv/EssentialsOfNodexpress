function prime(number) {
    let m = 2
    let status = true

    while(m <= number / 2) {
        if (number % 2 == 0) {
            status = false
            break
        }
        m++
    }

    return status ? status: status
}

module.exports = prime