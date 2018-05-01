var talk;
var listen;


var bot;

var a,b,q;

function setup(){
    
    createCanvas(600,600);
    background(0);
    
    
    b = select('#submit');
    q = select('#user');
    a = select('#response');
    b.mousePressed(chatBot);
    
    
bot = new RiveScript();
    bot.loadFile("brain.rive",botReady, botError);
    
    
    talk = new p5.Speech();
    talk.speak("Muscle Squeezer");
    
    listen = new p5.SpeechRec();
    listen.continuous = true;
    listen.onResult = showResult;
    listen.start();
}

function botReady(){
    bot.sortReplies();
}

function botError(){
    
}

function chatBot(){
    var question = q.value();
    var reply = bot.reply('local-user', question);
    
    talk.speak(reply);
    a.value(reply);
    
}
function draw(){
    
    
    fill(255);
    ellipse(mouseX,mouseY,20,20)
    
}
function keyPressed(){
    talk.speak("");
}
function showResult(){
    
    console.log(listen.resultString);
    q.value(listen.resultString);
    chatBot();
}