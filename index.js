// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(n => {return n.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(driver => driver.slice(0, letter.length) === letter)
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}