//2차원 배열
const arr = [100,[200,300],["javascript",'jquery']];

console.log(arr[0]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[2][1]);


//조건문
const num = 100;

if(num==100){
    document.write("실행되었습니다.(true)");
}

if(num==100) document.write("실행되었습니다.(true)");

if(num==100) document.write("실행되었습니다.(true)");
else document.write("실행되었습니다.(false)");

(num==100)? document.write(true) : document.write(false)


//switch문
const num2 = 100;
switch(num2){
    case 90:
        document.write("실행되었습니다.(90)");
        break;
    case 95:
        document.write("실행되었습니다.(95)");
        break;
    case 90:
        document.write("실행되었습니다.(90)");
        break;
    case 90:
        document.write("실행되었습니다.(90)");
        break;
    case 90:
        document.write("실행되었습니다.(90)");
        break;
}