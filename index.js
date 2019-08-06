// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// const string = "SOBBY"

function findMatching(drivers, string) {
    let iMatch = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase()) 
    return iMatch
}

function fuzzyMatch(drivers, string) {
    let sMatch = drivers.filter(driver => driver.charAt(0) == string.charAt(0))
    return sMatch
}

function matchName(drivers, string) {
    let pMatch = drivers.filter(driver => driver.name == string)
    return pMatch
}







// function findMatching(drivers, string) {
//     let match = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
//     return match
// }

// function fuzzyMatch(drivers, string) {
//     let match = drivers.filter(driver => driver.substring(0, string.length) === string) 
//     return match 
// }

// function matchName(drivers, string) {
//     let match = drivers.filter(function (el) {return el.name === string })
//     return match 
// }
