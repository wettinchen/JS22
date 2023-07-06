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
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View" 
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener(("mouseover"), (event) => {
        event.target.classList.toggle("height100");
    });
};