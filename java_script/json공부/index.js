
var name = "홍길동";
var age =23;
//json
var information = {
    name : '홍길동',
    age :23
};
//json 출력
console.log(information.age);
//json 포맷
// key : 중복x ,value값(중복가능,데이터타입)
var dwAcademy = {
    students : ['오승택','류근환','강인석','김보겸','이인서','나정수','정지유','김민영','이규성','이승섭','이상협','홍준호','유영준'],
    students_count : 15,
    teacher : "현상원",
    today : '2022-03-08',
    subject : ['SQL','JAVA','HTML']
};
//json 을 호출할 때는 key값을 사용해야 한다. 
//json 값추출
console.log(dwAcademy.students);
//json 배열 추출
console.log(dwAcademy.students[2]);

var len = dwAcademy.students.length;
for(var i = 0; i<len; ++i){}
//문제 1. students_count 가 15이하면 학생수 부족,15초과하면 학생수 정상
var count = dwAcademy.students_count;
if(count <= 15){
    console.log('학생수 부족')
}
else{
    console.log('학생수 정상')
}
//문제 2. 학생중 이 씨 몇명인지
var len = dwAcademy.students.length;
var searching = "이"
var count = 0;
for(var i = 0; i<len; ++i){
    var firstName = dwAcademy.students[i].substring(0,1);
    if(firstName == searching){
        ++count;
    }
}
console.log('이씨는 총' + count + '명')

var 영화 = {
    배급사 : 'CJ',
   영화이름 : [
        {
            name :  '스파이더맨',
            actor : ['톰홀랜드','잰데이아'],
            time : 148 ,
            
        },
        {
            name : '인터스텔라',
            actor : ['앤 해시웨이','에슈 에커너히']
        }
   ]
}
//배열에 json 이온다.
var 회원가입 = {
    이름 : '홍길동',
    주소 : '대전',
    취미 : ['주짓수','영화감상']
}

var emp = {
    사원ID : 3450,
    사원이름 : 'SMITH',
    급여 : 3400,
    부서 : [{
        name : '개발',
        count : 5
    } , '영업팀'],
    입사날짜 : 21-12-31,
    상사 : ["BRIAN" , "KING"]
}