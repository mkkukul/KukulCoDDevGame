


window.onload = function() {
    setGame();
}
function setGame(){
    for (let i = 0; i < 9; i++ ){
        let tile = document.createAttribute("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
}
