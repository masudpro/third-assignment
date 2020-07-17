//==================== First Math Solution =========================//

function feetToMile(feet){
    var mile = feet / 5280;
    if (mile < 0){
        return 'Sorry your input is wrong. Because negative feet or mile is not possible. Put a positive number that convert feet to';
    }
    else{
        return mile;
    }
 }

 var convertFeetToMile =  feetToMile(80) ;
 console.log(convertFeetToMile , 'mile');
//====================End First Math========================// 



//=================== Second Math Solution ========================//
function woodCalculator(chair, table, bed){

    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
    }
var woodTofurniture = woodCalculator(10, 6, 2);
console.log(woodTofurniture, "cubic feet");

//====================End Second Math========================// 




//====================Third Math Solution========================// 
function brickCalculator(floor){
    if (floor <= 0 ) {
        return 'Sorry your input is wrong. Because negative or zero floor or brick is not possible. Put a positive number that convert floor to';
    }
    if (floor <= 10 ) {
        var feet = floor * 15;
        var bricks = feet * 1000;
        return bricks;
    }
    if (floor <= 20) {
        var firstTenthFloor = 10 * 15;
         var after10thFloor = (floor - 10) * 12;
         var feet =  firstTenthFloor + after10thFloor;
         var bricks = feet * 1000;
             return bricks;
    }
    if (floor > 20) {
        var firstTenthFloor = 10 * 15;
        var after10thFloor = (floor - 10) * 12;
        var after20thFloor = (floor - 20) * 10;
        var feet =  firstTenthFloor + after10thFloor + after20thFloor;
        var bricks = feet * 1000;
             return bricks;
    }
     
}
var totalBricks = brickCalculator(20);
console.log(totalBricks, "bricks");

//====================End Third Math========================// 



                            
//====================Fourth Math Solution========================// 
function tinyFriend(name){
    var min = name[0]
    for (var i = 0; i < name.length; i++) {
        var currentWord = name[i];
        if(currentWord.length < min.length){
            min = currentWord;
        }
    }
    return min;
 }
 var friendsName = ["Swapon", "Masud", "Abir", "Kamrujjaman", "Abusama", "Asa", "BilalaUddin", "Sifat"];
var smallName = tinyFriend(friendsName);
console.log("The smalest name of friend list is: ", smallName);

//====================End Fourth Math========================// 
