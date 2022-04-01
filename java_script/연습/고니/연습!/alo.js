let array = [1, 3, 4, 5, 7]
let count = 0;
let cnt = 0;
let temp = 0;
let len = array.length;
let isflag = null;
for (let i = len; i > 0; ++i) {
    isflag = false;
    for (let j = 0; j < (i - 1); ++j) { 
        if (array[j] > array[j + 1]) {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            ++count;
            isflag = true;
        }
        if (!isflag) { 
            break;
        }
    }
}
console.log(array);
console.log(count);
