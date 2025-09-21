function resultReport(marks){
    for(let i=0; i<marks.length; i++)
    {
        if(marks[i] === 100){
            return "Invalid";
        }
        sum += marks[i];
        if(marks[i] < 40 && marks[i] > -1){
            fail++;
        }
        else
            pass++;
    }
    finalScore = Math.round(finalScore = sum/marks.length);
    if(isNaN(finalScore))
    {
        finalScore=0;
    }
    return {
        finalScore,
        pass,
        fail
    }
}

let marks = [];
let sum = 0, pass=0, fail=0, finalScore=0;
console.log(resultReport(marks));