
var ArrOfQuestion=[
    '1: Code an alert that displays the message "Hi"', 
    "2: What are the 5 punctuation characters of an alert statement, in order?", 
    "3: Type the modulus operator?",
    "4: What is the value of num? var num = 20 % 6;" ,
    "5: What is the last line of an else block?", 
    "6: What keyword removes the first element of an array?", 
    "7: What keyword copies elements from an array to another array?",
    "8: What keyword adds one or more elements to the beginning of an array?",
    "9: What is the value of z in the following code? <br /> let z = 20; <br /> z = z-10; ",
    "10: What is the value of result in the following code? <br /> var num1 = 15; <br />var num2 = 3; <br /> var result = num1 % num2;",
    "11: What is the out put of the following code? <br /> var arr=['1','2','13','4','5']; <br /> console.log(arr[2]);",
    "12: What is the out put of the following code? <br /> var arr=['1','2','3','4','5']; <br /> console.log(arr.length);"

 
]

 var answerArr=['a','alert("Hi");','("");','%','2','}','shift','slice','unshift','10','0','13','5'];
 

var QId=document.getElementById("saveQ");
var input=document.getElementById("input");
var btn = document.getElementById("Next");
var submitBtn= document.getElementById("submit");
var index=0;
var score=0;


function submitData(){

  if(input.value === ""){
     alert(`Please Question no: ${index} Answer Put`)
  }
  else{
    var putValue= input.value;
    if(answerArr[index] === putValue){
       score++
    }
     input.value=""

     btn.disabled=false
     submitBtn.disabled=true

  }
    
    
}

function nextQuestion(){
    QId.innerHTML =ArrOfQuestion[index];
    index++;

  
    submitBtn.disabled=false;
    btn.disabled=true;

    if(index > ArrOfQuestion.length){
       document.getElementById("QuestionNo").innerHTML="Quiz Finished";
       document.getElementById("QuestionNo").
       setAttribute("id","QuizFinished");

       input.style.display="none";
       btn.style.display="none";
       submitBtn.style.display="none";
       document.getElementById("AnswerBtn").style.display="block";

    }
}

nextQuestion();

function CheckFinalRes(){
   var persentageTotal=(score/ArrOfQuestion.length)*100;
   var FinalPer=Math.floor(persentageTotal)

    if(FinalPer > 90 && FinalPer <= 100){
      document.getElementById("Answershow").innerHTML=`Full Scholarship persentage = ${FinalPer}% <br /> Currect Question ${score}<br /> Total Question ${ArrOfQuestion.length}`;
    }
    else if(FinalPer > 75 && FinalPer <= 90){
      document.getElementById("Answershow").innerHTML=`Half Scholarship persentage = ${FinalPer}% <br /> Currect Question ${score}<br /> Total Question ${ArrOfQuestion.length}`;
    }
    else if(FinalPer > 60 && FinalPer <= 75){
      document.getElementById("Answershow").innerHTML=`Quarter Scholarship persentage = ${FinalPer}% <br /> Currect Question ${score}<br /> Total Question ${ArrOfQuestion.length}`;
    }
    else{
      document.getElementById("Answershow").innerHTML=`No Scholarship  persentage = ${FinalPer}% <br /> Currect Question ${score}<br /> Total Question ${ArrOfQuestion.length}`;
    }
}










