document.querySelectorAll(".RND").forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelectorAll(".RN").forEach((rn) => {
            rn.style.display = "block";
        });
    });
});