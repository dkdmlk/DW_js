
var array = [7, 4, 5, 1, 3]
var count = 0;
var len = array.length;
var temp = 0;
var cnt = 0;
for (var i = len; i > 0; --i) { 
    ++cnt
    for (var j = 0; j < (i - 1); ++j) { 
        if (array[j] > array[j + 1]) { 
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            ++count
        }
    }
}
console.log(cnt)
console.log(array);
console.log(count);