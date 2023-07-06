// JavaScript Event Listeners

view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        event.stopPropagation();
        view.style.backgroundColor = "purple";
    }, true);
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    }, true);
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    }, true);
};