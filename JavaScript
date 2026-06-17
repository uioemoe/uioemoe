const languages = {
en:"English",
kn:"Kannada",
hi:"Hindi",
zh:"Chinese",
ko:"Korean",
ja:"Japanese",
es:"Spanish"
};

async function translateAll(){

const text =
document.getElementById("input").value;

for(const lang in languages){

document.getElementById(lang).innerHTML =
"Translating...";

/*
Call translation API here
*/

}
}
