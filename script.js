//Numbers 1 to 10
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var text = ""
var i 

for (i=0; i < numbers.length; i++){
    text += numbers[i] + "<br>"
}

document.getElementById("numbers").innerHTML= text

//Random number
var randomnNumber = Math.floor(Math.random()*100)
document.getElementById("random").innerHTML= "The random number is " + randomnNumber

//Date
 var day

 switch(new Date().getDay()){
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wedndesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
 }

 document.getElementById("date").innerHTML = day

