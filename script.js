window.addEventListener("load", function () {
    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1500);
});