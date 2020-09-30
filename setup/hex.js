const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colors = document.querySelector('.colors');
//const headding = document.getElementsByTagName("H2");


btn.addEventListener('click', function(){
    let hexCode = '#';
    for(let i = 0; i < 6; i++){
        hexCode += hex[getRandomNumber()];
    };

    colors.textContent = hexCode;
    colors.style.color = hexCode;
    //headding.style.color = hexCode;
    document.body.style.backgroundColor = hexCode;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}