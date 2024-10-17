// This is a title the title is Clicker App 
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
// use console.log() to log the number of clicks - then test that in the browser’s console

let count = 0; 
let logo = document.getElementById("logo")
function increment() {
    count++;
    console.log(count)
    countEl = document.getElementById("count-el")
    countEl.innerHTML = count
    console.log(countEl)
    logo.setAttribute("width", 55 + count)
    logo.setAttribute("height", 55 + count)
}

function save() {
    entry = document.getElementById("entries")
    entry.innerHTML = entry.innerHTML + " " + count + " -"
}

function remove() {
    if (count > 0) {
    count--;
    console.log(count)
    countEl = document.getElementById("count-el")
    countEl.innerHTML = count
    console.log(countEl)
    }
    logo.setAttribute("width", 55 + count)
    logo.setAttribute("height", 55 + count)
}