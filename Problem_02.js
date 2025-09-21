function onlyCharacter(str) {
    if (typeof str === 'string'){
        str = str.replaceAll(' ', '').toUpperCase();
        return str;
    }
    return "Invalid"
}

let str = " ha ck m e 1 @ru.c  n  "
console.log(onlyCharacter(str))