// This is a title the title is Clicker App 
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
// use console.log() to log the number of clicks - then test that in the browser’s console

let count = 0; 
function increment() {
    count++;
    console.log(count)
    countEl = document.getElementById("count-el")
    countEl.innerHTML = count
    console.log(countEl)
}