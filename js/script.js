var text = [
    "Мотивация - путь к успеху",
    "Демотивация - путь к провалу",
    "Сложности сподвигают тебя к развитию",
    "Только ты сам можешь повлиять на свое будущее"
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

function More(){
    var motivation = document.createElement("h4");
    motivation.setAttribute("id", "motiv");
    motivation.setAttribute("class", "motiv");
    var replace = document.getElementById("motiv");
    replace.parentNode.replaceChild(motivation, replace);


    var motiv_text = text[getRandomInt(0, text.length)];
    //textes[random i];
    motivation.append(motiv_text);
    console.log("New text: " + motiv_text);
}

function copy(){
    var motiv = document.getElementById("motiv");

    // создание выделения
    var range = document.createRange();
    range.selectNode(motiv);
    
    // удаление текущего выделения на странице
    window.getSelection().removeAllRanges();
    
    // выделение объекта
    window.getSelection().addRange(range);

    console.log("Copied to Clipboard: " + motiv.innerHTML);
    document.execCommand("copy");  
    window.getSelection().removeAllRanges(); 
}