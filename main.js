// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImgEl = document.getElementById("char-img");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", changeTheme);

function changeTheme() {
    // Input
    let color = document.getElementById("theme-in").value.toLowerCase();

    // If Statment
    if (color == "dark" || color == "black" || color == "dark theme" ) {
    document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("text").style.color = "white";
    } else if (color == "light" || color == "white" || color == "light theme" ) {
        document.getElementById("body").style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        document.getElementById("text").style.color = "black";
    }

    document.getElementById("theme-in").value = ""
}

function btnClicked() {
    // Input
    let name = document.getElementById("char-in").value.toLowerCase();

    // If Statment
    if (name == `po` || name == "dragon warrior" || name == "kung fu panda" || name == "panda") {
        charNameEl.innerHTML = `Po`;
        charQuoteEl.innerHTML = `"Buddy, I am the Dragon Warrior!"`;
        charImgEl.src = "img/po.png";
    } else if (name == `tigress` || name == `master tigress` || name == "tiger") {
        charNameEl.innerHTML = `Tigress`;
        charQuoteEl.innerHTML = `"That was hardcore!"`;
        charImgEl.src = "img/tigress.png";
    } else if (name == `mantis`) {
        charNameEl.innerHTML = `Mantis`;
        charQuoteEl.innerHTML = `"Fear the Bug!"`;
        charImgEl.src = "img/mantis.png";
    } else if (name == `monkey`) {
        charNameEl.innerHTML = `Monkey`;
        charQuoteEl.innerHTML = `"We should hang out!"`;
        charImgEl.src = "img/monkey.png";
    } else if (name == `viper`) {
        charNameEl.innerHTML = `Viper`;
        charQuoteEl.innerHTML = `"I don't need to bite to fight!"`;
        charImgEl.src = "img/viper.png";
    } else if (name == `crane`) {
        charNameEl.innerHTML = `Crane`;
        charQuoteEl.innerHTML = `"Wings of Justice!"`;
        charImgEl.src = "img/crane.png";
    } else if (name == `oogway` || name == "turtle") {
        charNameEl.innerHTML = `Oogway`;
        charQuoteEl.innerHTML = `"Yesterday is history, Tomorrow is a mystery."`;
        charImgEl.src = "img/oogway.png";
    } else if (name == "mr ping" || name == "mrping" || name == "ping" || name == "duck") {
        charNameEl.innerHTML = `Mr Ping`;
        charQuoteEl.innerHTML = `"To make something special you just have to believe it's special."`;
        charImgEl.src = "img/mr-ping.png";
    } else if (name == "croc" || name == "crocodile" || name == "alligator") {
        charNameEl.innerHTML = `Croc`;
        charQuoteEl.innerHTML = `"We'll prove to all those who hunger for justice and honor."`;
        charImgEl.src = "img/croc.png";
    } else if (name == "storming ox" || name == "stormingox" || name == "ox") {
        charNameEl.innerHTML = `Storming Ox`;
        charQuoteEl.innerHTML = `"You're better off here."`;
        charImgEl.src = "img/storming-ox.png";
    } else if (name == "shen" || name == "peacock") {
        charNameEl.innerHTML = `Shen`;
        charQuoteEl.innerHTML = `"Nothing stands in my way."`;
        charImgEl.src = "img/shen.png";
    } else if (name == "shifu" || name == "redpanda" || name == "red panda") {
        charNameEl.innerHTML = `Shifu`;
        charQuoteEl.innerHTML = `"If you only do what you can do, you will never be more than who you are."`;
        charImgEl.src = "img/shifu.png";
    } else if (name == "tai" || name == "tai lung" || name == "tailung" || name == " leopard") {
        charNameEl.innerHTML = `Tai Lung`;
        charQuoteEl.innerHTML = `"Who denied me my destiny?"`;
        charImgEl.src = "img/tai-lung.png";
    } else if (name == "soothsayer" || name == "sooth" || name == "goat") {
        charNameEl.innerHTML = `Soothsayer`;
        charQuoteEl.innerHTML = `"It is the rest of your story, who you *choose* to be."`;
        charImgEl.src = "img/soothsayer.png";
    }  else if (name == "boss wolf" || name == "bosswolf" || name == "wolf boss" || name == " wolfboss" || name == "wolf") {
        charNameEl.innerHTML = `Boss Wolf`;
        charQuoteEl.innerHTML = `"I'll tell you what's gonna be yours, my fist in your face!"`;
        charImgEl.src = "img/boss-wolf.png";
    } else if (name == "kai" || name == "bull") {
        charNameEl.innerHTML = `Kai`;
        charQuoteEl.innerHTML = `"There will be no one left who will even remember your name."`;
        charImgEl.src = "img/kai.png";
    } else {
        charNameEl.innerHTML = `?????`;
        charQuoteEl.innerHTML = `-------------------`;
        charImgEl.src = "img/question-mark.png";
    }

    document.getElementById("char-in").value = ""
};