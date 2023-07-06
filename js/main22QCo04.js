// JavaScript Event Listeners

view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)
const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", doSomething, false);