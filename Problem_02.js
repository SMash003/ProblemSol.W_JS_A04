function  onlyCharacter( str ) {
    str = str.replaceAll(' ', '').toUpperCase();
    return str;
}

let str = " ha ck m e 1 @ru.c  n  "
if(typeof str === 'string'){
    console.log(onlyCharacter(str));
}
else
    console.log("Invalid");
