function totalFine(fare){
    let fine = fare + (fare*0.2) + 30;
    return fine;
}

let fare = "Gorib tai ticket katinai";
if(fare > 0 && typeof fare === "number")
{
   console.log(totalFine(fare)); 
}
else
    console.log("Invalid");
