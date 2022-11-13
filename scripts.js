//Game Status
let hasWinner = false;

//Random Player Choice
let randomPlayer = Math.random() < 0.5 ? "Player 1" : "Player 2";
$('#player').text(randomPlayer)
let p1Score = 0;
let p2Score = 0;

//Create Grid
for(i = 0; i < 10; i++){ //Create Rows
    $("#gameGrid").append("<div class='gridRow' grid-row="+ i +"></div>")
}
for(x = 0; x < 10; x++){ //Create Squares
    $(".gridRow").append("<div class='square' num="+ x +"></div>")
}

//Create Random Objects
let objectNum = 5;

for(i = 0; i < objectNum; i++){
    let randomRow = Math.floor(Math.random() * 10);
    let randomCell = Math.floor(Math.random() * 10);

    $(".gridRow[grid-row="+ randomRow + "] > .square[num="+ randomCell +"]").addClass("item")
}

//Select Row
$(".gridRow").click(function(){
    if(hasWinner) return;
    
    if($(this).hasClass("grey")) return;

    $(this).children().addClass("grey")

    if($(this).children().each(function()
    {
        if($(this).hasClass("item"))
        {
            $(this).removeClass("grey")
            $(this).addClass("found")

            if(randomPlayer == "Player 1")
            {
                p1Score = p1Score + 1;
                $("#player1Score").text(p1Score)
            }
            else
            {
                p2Score = p2Score + 1;
                $("#player2Score").text(p2Score)
            }
        }
    }))

    randomPlayer = randomPlayer == "Player 1" ? "Player 2" : "Player 1"
    $('#player').text(randomPlayer)

    $(this).children().removeClass("item");

    if(p1Score + p2Score == objectNum){
        hasWinner = true;
        if (p1Score > p2Score){
            alert("Player 1 Wins!")
        }
        else{
            alert("Player 2 Wins!")
        }
    }

})


