// 전역변수 출력
console.log('filename:',__filename);
console.log('dirname'+__dirname);

//console 전역객체 사용

console.log('숫자   : %d + %d = %d',273,32,273+32);
console.log('문자열 :%s','Hello World','특수기호와 상관없음');
console.log('JSON   :%j',{name:'Park'});
console.log('JSON   :'+{name:'Park'});
console.log('JSON   :'+JSON.stringify({name:'Park'}));

var obj = {name:"Park"};
obj = JSON.stringify(obj); //객체 ->문자열로 변환
obj = JSON.parse(obj);     //문자열 -->객체로 변환


console.time('alpha');

var output = 1;
for (var i = 1; i <=10; i++) {
	output *= i ;
}
console.log('Resulr:',output);

//시간 측정을 종료합니다.
console.timeEnd('alpha');


var module = require('./module.js');

console.log('abd(-222) = %d',module.abs(-222));
console.log('circleArea(3) = %d', module.circleArea(3));