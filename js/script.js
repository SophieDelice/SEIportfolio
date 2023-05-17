//  alert('js is loaded')


const body = document.querySelector("body");
const cb1 = document.getElementById("cb1");
console.log(body)


cb1.addEventListener("click", () => {
 body.classList.toggle("day-background");
 console.log("click")
 });

