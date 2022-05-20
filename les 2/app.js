//Oefening 1//
//. is voor tag, # is voor id, en geen definition is een <html>tag</html> voor queryselector.//

//img ophalen uit de html//
const bird = document.querySelector(".bird");
let px = 0;

//voeg een click event toe aan de image
// check of je erop kan klikken.

bird.addEventListener("click", function() {
    //Elke keer dat ik druk word er 50+ opgeteld
    px = px + 50
    // is hetzelfde als px += 50;
    
    //voeg styling toe aan de bird class met properties.
    //left: 50px
bird.style.left = px + "px";
})
