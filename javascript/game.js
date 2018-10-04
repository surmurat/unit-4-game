
var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function(){

    $(".crystals").empty();

    var images = [
        'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642',
        'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/b/ba/Crystal_mystic.png/revision/latest?cb=20151122000019',
        'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c3/Crystal_iso8.png/revision/latest?cb=20151121235324',
        'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/d/d8/Crystal_cosmic.png/revision/latest?cb=20151121233932'];

    random_result = Math.floor(Math.random() * 69 ) + 30;


$("#result").html('Random Result:' + random_result);

for( var i = 0; i < 4; i++){
    
    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

    
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
        "data-random": random
     });

     crystal.css({
        "background-image":"url('" + (images[i]) + "')",
        "background-size":"cover"
     });


    $(".crystals").append(crystal);

}

$("#previous").html("Total Score" + previous);
}



resetAndStart();




$(document).on('click', ".crystal", function() {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score" + previous);

    console.log(previous);

if(previous > random_result){
    lost++;
    
    $("#lost").html("You Lost" + lost);

    previous = 0;


    resetAndStart();
}

else if(previous === random_result){
    win++;
    
    $("#win").html("You Win" + win);



    previous = o;

    resetAndStart();
}



});