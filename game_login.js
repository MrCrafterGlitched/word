function Adder() {
    player_1_name=document.getElementById("Player_1_name").value;
    player_2_name=document.getElementById("Player_2_name").value;
    if (player_1_name!=""&&player_2_name!="") {
        localStorage.setItem("name1Key", player_1_name);
        localStorage.setItem("name2Key", player_2_name);
        window.location="game_page.html"   
    }else{
        window.alert("Player names are a must so, you cant play the game until and unless you give the names for player 1 and player 2.")
    }
}