//Oefening 1//
//. is voor tag, # is voor id, en geen definition is een <html>tag</html> voor queryselector.//

//img ophalen uit de html//
const bird = document.querySelector(".bird");
let px = 0;

//voeg een click event toe aan de image
// check of je erop kan klikken.

bird.addEventListener("click", function () {
    //Elke keer dat ik druk word er 50+ opgeteld
    px = px + 50
    // is hetzelfde als px += 50;

    //voeg styling toe aan de bird class met properties.
    //left: 50px
    bird.style.left = px + "px";
})

//E = event afgekort.
//Als mijn key gelijk is aan de text arrowright dan voert hij de code uit

window.addEventListener("keydown", function (e) {
    console.log(e.key)
    if (e.key == "ArrowRight") {
        px = px + 50
        bird.style.left = px + "px";
        bird.src = "img/b-right.svg"
    }

    if (e.key == "ArrowLeft") {
        px = px - 50
        bird.style.left = px + "px";
        bird.src = "img/b-left.svg"
    }

    if (e.key == "ArrowUp") {
        px = px + 50
        bird.style.bottom = px + "px";
        bird.src = "img/b-up.svg"
    }

    if (e.key == "ArrowDown") {
        px = px - 50
        bird.style.bottom = px + "px";
        bird.src = "img/b-down.svg"
    }
})