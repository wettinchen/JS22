// JavaScript Event Listeners

view1.style.display = "none";
view2.style.display = "flex";
view3.style.display = "none";
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
    }
});