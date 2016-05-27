function getRank(input){
    var scores = [60, 80, 90];
    var ranks = ["D", "C", "B"];

    var result = "";
    for (var i = 0; i < scores.length; i++){
        if(input < scores[i]){
            return ranks[i];
        }
    }
    return "A";

}