let name;
let country;
let p = document.getElementById('output')

//aanmaken functie
const nameChanged = function(event){
    //event loggen in je console log
    name = event.target.value
    changeInput()
}

const countryChanged = function(event){
    country = event.target.value
    changeInput();
}

const changeInput = function(event){
    const text = `Je heet ${name} en je komt uit ${country}`;
    p.textContent = text;
}