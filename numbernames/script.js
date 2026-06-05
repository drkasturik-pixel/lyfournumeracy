const questions = [

{
number:9,
word:["n","","n",""],
answer:["i","e"]
},

{
number:21,
word:["t","","e","","t","y","-","o","n",""],
answer:["w","n","e"]
},

{
number:6,
word:["","i","x"],
answer:["s"]
},

{
number:27,
word:["t","","e","n","t","y","-","s","e","","e",""],
answer:["w","v","n"]
},

{
number:36,
word:["","h","","","t","y","-","","i","x"],
answer:["t","i","r","s"]
},

{
number:29,
word:["t","","e","","t","","-","n","","n",""],
answer:["w","n","y","i","e"]
},

{
number:41,
word:["f","","r","","y","-","o","","e"],
answer:["o","t","n"]
}

];

const letters =
[
"e","f","i","j",
"n","o","r","s",
"t","v","w","x"
];

let currentQuestion = 0;
let score = 0;
let muted = false; const splash =
document.getElementById("splashScreen");

const instruction =
document.getElementById("instructionScreen");

const game =
document.getElementById("gameScreen");

const endScreen =
document.getElementById("endScreen");

setTimeout(()=>{

splash.classList.remove("active");
instruction.classList.add("active");

speakInstructions();

},5000);

function speak(text){

if(muted) return;

speechSynthesis.cancel();

let speech =
new SpeechSynthesisUtterance(text);

speech.rate = 0.9;

speechSynthesis.speak(speech);
}

function speakInstructions(){

speak(
"Welcome to the Number Names Game. Drag and drop the correct letters in the blanks to form the correct number name."
);

}
