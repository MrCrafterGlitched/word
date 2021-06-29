player1_name=localStorage.getItem("name1Key")
player2_name=localStorage.getItem("name2Key")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+":-";
document.getElementById("player2_name").innerHTML=player2_name+":-";
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="Question turn:"+ player1_name
document.getElementById("player_answer").innerHTML="Answer turn:"+player2_name
function Check() {
    word=document.getElementById("word").value;
    if (word!=""&& word.length>5) {
    lowerword=word.toLowerCase();
    console.log(lowerword)
    Char_1=lowerword.charAt(1)
    console.log(Char_1);
    Position2=Math.floor(lowerword.length/2)
    Char_2= lowerword.charAt(Position2)
    console.log(Char_2)
    Char_3=lowerword.charAt(lowerword.length-1)
    console.log(Char_3)
    change_1=lowerword.replace(Char_1,"_")
    change_2=change_1.replace(Char_2,"_")
    change_3=change_2.replace(Char_3,"_")
    console.log(change_3)
    question_tag="<h3 id='word_display'>Q:"+change_3+"</h3>";
    input_tag="<br>Answer:<input type='text' id='input_box'>";
    Button_tag="<br> <br> <button class='btn btn-primary'onclick='checkanswer()'>Check Answer</button>";
    Row=question_tag+input_tag+Button_tag
    document.getElementById("output").innerHTML=Row
    document.getElementById("word").innerHTML=""
    }else{
        alert("Enter a word to play the game")
    }
}
question_turn="player 1"
Answer_turn="player 2"
function checkanswer() {
    answer=document.getElementById("input_box").value;
    if (answer!="") {
    loweranswer=answer.toLowerCase();
    if (loweranswer==lowerword) {
        if (Answer_turn=="player 2") {
             player2_score=player2_score+1
           document.getElementById("player2_score").innerHTML=player2_score        
        }
        else{
            player1_score=player1_score+1
            document.getElementById("player1_score").innerHTML=player1_score
        }
    }
    if (question_turn=="player 1") {
        question_turn="player 2"
        document.getElementById("player_question").innerHTML="Question turn:"+ player2_name
    } else {
        question_turn="player 1"
        document.getElementById("player_question").innerHTML="Question turn:"+ player1_name
    }
    if (Answer_turn=="player 1") {
        Answer_turn="player 2"
        document.getElementById("player_answer").innerHTML="Answer turn:"+ player2_name
    } else {
        Answer_turn="player 1"
        document.getElementById("player_answer").innerHTML="Answer turn:"+ player1_name
    }
    document.getElementById("output").innerHTML=""
    }
}