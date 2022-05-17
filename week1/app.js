let name;
let country;
let p = document.getElementById("output");

let nameChange = document.getElementById("nameChange");
let countryChange = document.getElementById("countryChange");

nameChange.addEventListener("change", function () {
    name = event.target.value;
    changeInput();
})

countryChange.addEventListener("change", function () {
    country = event.target.value;
    changeInput();
})

const changeInput = function (event)
 { //het event loggen in je console
    console.log();
    const text = `Je heet ${name} en je komt uit ${country}`;
    p.textContent = text;
}

// EEN FUNCTIE WERKT PAS ALS JE HET OPROEPT!!!
// nameChanged();