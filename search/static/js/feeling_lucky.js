let luckyButton = document.getElementById("feeling_lucky");
luckyButton.addEventListener("click", () => {
    let articleId = Math.floor(Math.random() * 1400);
    window.location ='/article/' + articleId;
})
