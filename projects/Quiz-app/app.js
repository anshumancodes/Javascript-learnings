let w=document.querySelector('.quiz-container');
let q=document.createElement('span');
q.id="question";
q.innerHTML="hello"
w.appendChild(q);
let quizElements={
    quiz:[
        {
            question:"What is the capital of India?",
            options:["Delhi","Mumbai","Kolkata","Chennai"],
            answer:"Delhi"
        },
        {
            question:"What is the capital of pakistan?",
            options:["Delhi","Mumbai","Kolkata","Chennai"],
            answer:"Delhi"
        },
        {
            question:"What is the capital of inonesia?",
            options:["Delhi","Mumbai","Kolkata","Chennai"],
            answer:"Delhi"
        }
    ]
    ,
    quizcon:null,  // quiz container that containes question and options
    quizquestion:null, // element that contains question
    quizans:null, // element that contains options
    score:0,
    questionIndex:0,


    

};

init:()=>{

    quizElements.quizcon=document.querySelector('.quiz-container');
    quizElements.quizquestion=document.createElement('span');
    quizElements.quizquestion.id="question";
    quizElements.quizquestion.innerHTML="hello"

    quizElements.quizcon.appendChild(quizElements.quizquestion);

   quizElements.draw()

console.log(quizElements.quizcon);

}





