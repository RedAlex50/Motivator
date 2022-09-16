var text = [
    "Мотивация - путь к успеху",
    "Демотивация - путь к провалу",
    "Сложности сподвигают тебя к развитию",
    "Только ты сам можешь повлиять на свое будущее"
];

var help_list = [
    "http://psi.mchs.gov.ru/",
    "http://pomoschryadom.ru/",
    "http://www.твоятерритория.онлайн/",
    "http://msph.ru/",
    "http://telefon-doveria.ru/",
    "http://www.ya-roditel.ru/parents/consultation/",
    "http://pomogaya-drugim.ru/"
];

var moreclicked = 0;

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

    var motiv_text_prev = replace.innerHTML;

    var motiv_text = text[getRandomInt(0, text.length)];
    console.log("New text: " + motiv_text);
    while (motiv_text == motiv_text_prev){
        motiv_text = text[getRandomInt(0, text.length)];
        console.log("New text: " + motiv_text);
    }
    
    moreclicked++;
    motivation.append(motiv_text);
    motiv_text_prev = motiv_text;


    if (moreclicked  == 10){
        motivation.append(". \n Тебе недостаточно 10 раз?!");
        moreclicked=0;
    }
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

function help(){
    var helper = help_list[getRandomInt(0, help_list.length)];
    document.location.href = helper;
}