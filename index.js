// var tech = prompt('enter your lang');
// if( tech==( 'js')){
//     console.log("learn frontend")

// }
// else if( tech ==('.net')){
//     console.log('backend')
// }
// else if ( tech ==('paython')){
//     console.log('learn ai')
// }
// else{
//     console.log('enter another language')
// }

// var age = 20;
// var role = 'admin';

// switch(true){
//     case age >20 :
//         console.log ('age is more than 20');
//     break;

//     case age<20:
//         console.log('age is less than 20');
//     break;

//     case age ===20 :
//         console.log('age equal 20');
//         switch(role){
// case 'admin':
//     console.log('admin');
//     break;
//     case 'user':
//         console.log ('this is user');
//         break;
//         default:
//             console.log('not correct');
//         }
//     break;

//    default:
//     console.log('This is not correct')
// }

// var userNumber =Number(prompt ('enter user number')) ;
// if (userNumber>0){
//     console.log ('positive');

// }
// else if (userNumber<0){
//     console.log('negative');


// }
// else if (userNumber=== 0){
//     console.log('equal to 0');

// }
// else{
//     console.log('enter another number');
// }
// var i=0;
// while (i<5){
//     console.log('hello');
//     i++
// }
 
// 1


// function sum(num1,num2){

//     var x=num1 ;
//     var y= num2; 
//     console.log(num1+num2)
// }
// sum(10,20)


// var userName = prompt('enter name');
// function welcome (x){
//     document.getElementById('demo').innerHTML = 'welcomme ya'+ x;
// }
// welcome(userName)

// function sum(n1 , n2){
//     var result = n1 +n2;
//     return result;
// }
// var finalResault = sum(10,30);

// function getAverage (val){
//     var Avreage = val /2;
//     console.log('Avrege is' + Avreage)
// }
// getAverage(finalResault)
// var employee ={
//     name:"Ahmed",
//     age :30,
// salary : 56789,

// address : {
//     code:'3214' ,city: 'alex'
// },
// eat: function(){
//     console.log('eat');
// }
// }
// console.log (employee.eat())
// employee.eat();
// console.log(employee.address.city)
var quotes = [' “Be yourself; everyone else is already taken.” ' ,
' “So many books, so little time.” ' , ' “A room without books is like a body without a soul.” ' ,
' “You know youre in love when you cant fall asleep because reality is finally better than your dreams”  '
,' “ You only live once, but if you do it right, once is enough.” ' 
 , ' “If you tell the truth, you dont have to remember anything ” '
 , ' “Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .” '
 ,' “Live as if you were to die tomorrow. Learn as if you were to live forever.” '

  ,' “Live as if you were to die tomorrow. Learn as if you were to live forever.” '
 ,' “It is better to be hated for what you are than to be loved for what you are not.” '

]

var btn =document.getElementById('btnclick')
btn.onclick= getRandomnum

var NoRepeat=[];
function getRandomnum (){
    for ( var i=0 ; i<quotes.length ; i++){

        var number = Math.floor(Math.random ()*quotes.length )
      
     if( !quotes.includes( number)){
        
        NoRepeat.push( quotes [number]);
      
     }

     else {
       console.log('click again')
        }
        var quote = NoRepeat[number]
 }
 console.log(NoRepeat[number])

 
document.getElementById('demo').innerHTML =  quote;

}













// var students =[

//     {sName:'ali',age:20,gender:'male',subject:['os','ai']}, //0
    
//     {sName:'ahmed',age:10,gender:'male',subject:['os','ai']},  //1
    
//     {sName:'mohamed',age:10,gender:'male',subject:['os','ai']}, //2
    
//     {sName:'hend',age:20,gender:'female',subject:['os','ai']}, //3
    
//     {sName:'fatma',age:20,gender:'female',subject:['os','ai']}, //4
    
//     {sName:'mona',age:20,gender:'female',subject:['os','ai']}, //5
    
//     ]
//     var btn = document.getElementById('btnClick')
//     btn.onclick =DisplayData
//     function DisplayData (){
//         cartoona=''
//         for( var i=0; i<students.length; i++){

// cartoona=cartoona+ '<div class="child">'
// '<h2> name :${students[i].sname } </h2>'
// <h2> age  : ${students[i].age } </h2>
// <h2> gender  : ${students[i].gender } </h2>
// </div>'
       
// }
// document.getElementById('box').innerHTML= cartoona
//     }















// var friends = [ 'shimaa', 'asmaa', 'hagar', 'eman', 'mariam', 'eman', 'hagar', 'asmaa', 'eman']


// function searchFriend(searchitem){

//     var searchArray = [] ;

//     for (var i=0 ; i<friends.length ;i++){

//         if (searchitem==friends[i]){
//             searchArray.push(i)
//         }
//     }
//     return searchArray;
// }
//  var x = searchFriend('hagar');
// console.log(x);
