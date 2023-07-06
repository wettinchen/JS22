// JavaScript Event Listeners

view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";
const view = document.querySelector("#view2");
console.log(view);
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
});