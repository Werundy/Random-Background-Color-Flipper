const button = document.getElementById("changer");
const body = document.getElementById("container");
const hexCode = document.getElementById("hexcode");
const header = document.getElementById("head");
button.addEventListener("click", function(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let randomNum = 0;
    let color = ["#"];
    for(let i = 0; i < 6; i++){
        randomNum = Math.floor(Math.random() * 16);
        color.push(hex[randomNum]);
    }
    header.style.backgroundColor = color.join("");
    hexCode.textContent = color.join("").toUpperCase();
    return body.style.backgroundColor = color.join("");
})