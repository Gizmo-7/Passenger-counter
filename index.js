//let saveEl = document.getElementById("save-el")
//let countEl = document.getElementById("count-el")
//let count = 0

//function increment() {
//    count += 1
//    countEl.textContent = count
//}

//function save() {
//    let countStr = count + " - "
//    saveEl.textContent += countStr
//    countEl.textContent = 0
//    count = 0
//}

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalCountEl = document.getElementById("total-count-el") // new element
let count = 0
let totalCount = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalCount += count // update total count before resetting count
    countEl.textContent = 0
    count = 0
    totalCountEl.textContent = "Total Count: " + totalCount
}

//function save() {
//  let countStr = count + " - "
//  saveEl.textContent += countStr
//  countEl.textContent = 0
//  count = 0
//  totalCount += count // update total count
//  totalCountEl.textContent = "Total Count: " + totalCount
//}

function getTotalCount() {
    return totalCount
}

