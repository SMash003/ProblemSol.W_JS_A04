function isSame(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        if (arr1.length !== arr2.length)
            return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i] && typeof arr1[i] !== typeof arr2[i]) {
                return false;
            }
        }
        return true;
    }
    return "Invalid"
}

let arr1 = [2, 5, 6], arr2 = 256;
console.log(isSame(arr1, arr2))


