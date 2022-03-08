// JSON(Java Script Object Notation)
// JSON : 데이터 형식(단순히 데이터를 표시하는 표현 방법)
var information = {
    //key : value
    "name" : "kang in seok",
    "age"  : "27",
    "address" : "대전 중구 평촌로",
    "isMarri" : "false"
}; //json 은 key와 value로 구성.
//주의
//1. key는 중복 불가능 value는 중복 가능!
//2. value에 숫자(int), 문자(string), blooean, 배열형(array), null
//3. 중괄호로 감싼다.
console.log(information);
console.log(information.age);

var age = information.age;

if(age > 30){
    console.log("나이가 30이상입니다")
}
if(age < 30){
    console.log("20대")
}

//상수
const PI = 3.14;
//배열
var array = [1,2,3,4,5];

for(var i=0; i<array.length; ++i){
    var value = array[i];
    if(value % 2 == 0){
        console.log(value)
    }
}

var max =0;
for(var i=0; i<array.length; ++i){
    if(max < array[i]){
        max = array[i]
    }
}
console.log('최대값은?' + max );

var min = 5;
for(var i=0; i<array.length; ++i){
    if(min > array[i]){
        min = array[i]
    }
}
console.log(min)