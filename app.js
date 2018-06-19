var questions = [{
    ques: "What creature is depicted in the emblem for Gryffindor house?",
    ans: ["Badger", "Eagle", "Snake", "Lion"],
    name: "houses",
    correct: "Lion",
    divClass: ".houses"
},
{
    ques: "The term Muggle means what in the wizarding world?",
    ans: ["Magical Person with one magical parent", "non magical person from a non-magical family", "non magical person from a magical family", "magical person who sucks at magic"],
    name: "muggle",
    correct: "non magical person from a non-magical family",
    divClass: ".muggle"
},
{
    ques: "What color is Dumbledor's beard?",
    ans: ["White", "Black", "Green", "No beard"],
    name: "beard",
    correct: "White",
    divClass: ".beard"
},
{
    ques: "Draco Malfoy Plays for which quidditch team?",
    ans: ["Atlanta Braves", "House Slytherin", "House Gryffindor", "Cleveland Cavaliers"],
    name: "draco",
    correct: "House Slytherin",
    divClass: ".draco"
},
{
    ques: "Harry plays what position in quidditch?",
    ans: ["Keeper", "Seeker", "Beater", "Chaser"],
    name: "snitch",
    correct: "Seeker",
    divClass: ".snitch"
},
{
    ques: "What charm keeps away Dementors?",
    ans: ["Patronus Charm", "Stranger Danger", "Close eyes and run", "Avada Kedavra"],
    name: "soulSeeker",
    correct: "Patronus Charm",
    divClass: ".soulSeeker"
},
{
    ques: "What is the name of the platfrom to board the Hogwarts Express?",
    ans: ["9 3/4", "The Bifrost", "Delta Flight 334", "Tech Trolley"],
    name: "hogwartsExpress",
    correct: "9 3/4",
    divClass: ".hogwartsExpress"
},
{
    ques: "How are packages and letters sent in the wizarding world?",
    ans: ["Fed Ex", "Teleportation", "Via Owl", "Throw it and it gets there"],
    name: "airMail",
    correct: "Via Owl",
    divClass: ".airMail"
},
{
    ques: "What is the name of Harry's arch nemisis?",
    ans: ["He who shall not be named", "Voldemort", "Hagrid", "Both A and B"],
    name: "trickQuestion",
    correct: "Both A and B",
    divClass: ".trickQuestion"
},
{
    ques: "Who does Harry marry?",
    ans: ["Ginny Weasley", "Hermione Granger", "Cho Chang", "A Broom"],
    name: "weddingBells",
    correct: "Ginny Weasley",
    divClass: ".weddingBells"
}
] 

var labels = ["first", "second", "third", "forth"];


var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});


var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();

for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}



var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    
    clearInterval(timer);
    return;
}
}, 1000);


$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; 



var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;


for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};


countdown();

$('.container').fadeOut(500);

$('#answerScreen').show();

$('#correctScreen').append(correctAnswers);

$('#wrongScreen').append(wrongAnswers);

}); 