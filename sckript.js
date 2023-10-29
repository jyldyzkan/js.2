// user admin true welcome, 'user'
// false not correct user

// function myFunction(user){
//     if(user==='admin'){
//         return `Welcome user`
//     }
//     else {
//         return `not correct ${user}`
//     }
// }
// console.log(myFunction('jyldyz'))
// console.log(myFunction('admin'))



// today is 'day' of february
// on february only 28 day, your day is 'day' of another month

// function myFunction(day){
//     if(day<=28){
//         return `Yesterday ${day} Febrary`
//     }else{
//         return `Yesterday ${day} another month`
//     }
// }
// console.log(myFunction(1))
// console.log(myFunction(29))



// 'num' is equals of 50
// 'num' is not correct

// function myFunction(num){
//     if(num===50){
//         return `${num} is equals of 50`
//     }
// else{
//     return `${num} is not correct`
//     }
// }
// console.log(myFunction(49))
// console.log(myFunction(50))



// 'user' 'age' old, welcome
// 'user' 'age' old, rejected

// function myFunction(age,user){
// if(age>=18){
//     return `Welcome ${user} you old`
// }
// else {
//     return `rejected ${user} you young`
// }
// }
// console.log(myFunction(19, 'jyldyz'))
// console.log(myFunction(17, 'Aidin'))


// 'user' name is too short (min 3)
// 'user' name is accepted

// function myFunction(user){
//     if(user.length>=3){
//         return `${user} name is accepted`
//     }
//     else{
//         return `${user} name is too short`
//     }
// }
// console.log(myFunction('jyldyz'))
// console.log(myFunction('Da'))



// 'user' name is too long (max 5)
// 'user' name is accepted

// function myFunction(user){
//     if(user.length>5){
//         return `${user} name is too long`
//     }
//     else{
//         return `${user} name is accepted`
//     }
// }
// console.log(myFunction('data'))
// console.log(myFunction('jyldyz'))


// 'age' must be a number ('20')

// function myFunction(age){
//     if(age===20){
//         return 'number'
//     }
// else {
//     return 'not a number'
//     }
// }
// console.log(myFunction(20))
// console.log(myFunction('20'))


// 'age' must be a string (20)
// 'age' must be older then 23

// function myFunction(string,age){
//     if(string==='20' && age === 23){
//         return 'true'
//     }
//     else {
//         return 'false'
//     }
// }
// console.log(myFunction('20',23))
// console.log(myFunction(20,23))





// today is monday/tuesday/wednesday/thursday/friday weekend
// max days of weeks 7
// function myFunction(days){
//     if(days===1){
//         return 'Monday'
//     } else if(days===2) {
//         return 'Tuesday'
//     }else if(days===3){
//         return 'Wednesday'
//     }else if(days===4){
//         return 'Thursday'
//     }
//     else if(days===5){
//         return 'Friday'
//     }else if(days===6 || days===7){
//         return 'Weekend!!!!!!'
//     }
//     else if (days>=8){
//         return 'there is no such day.'
//     }
// }
// console.log(myFunction(1))
// console.log(myFunction(7))
// console.log(myFunction(4))


// hello world
// 1. вам надо будет проверить и убрать пробелы в начале и в конце
// 2. поменять местами world hello
// 3. не первое o поменять на а

// function myFunction(str,a,b,c,d,res){
//     if(str.includes(" ")){
//          a = str.trim()
//
//          b = a.slice(6,12) + " "+ a.slice(0,6)
//
//         //первое решение
//         //  c = a.split("").reverse().join('')
//         // d = c.replace('o', 'a')
//         // res =d.split('').reverse().join('')
//         // return res
//
//         //второе решение
//         c=a.slice(0,6) + a.slice(6,11).replace('o','a')
//         return c
//     }
//
// }
// console.log(myFunction('    Hello world   '))



// 1. проверить длинну на четность

// function myFunction(a){
//     if(a.length%2===0){
//         return `длина ${a} четная`
//     }else{
//         return `длина ${a} нечетная`
//     }
// }
// console.log(myFunction('jyldyz'))
// console.log(myFunction('kalla'))




// 1. lorem ipsum dolor sit amet => loremipsumdolorsitamet
// function myFunction(str,a){
//     if(str.includes(" ")){
//         a=str.replaceAll(' ','')
//         return a
//     }
// }
// console.log(myFunction('lorem ipsum dolor sit amet'))





// str в задаче вам надо проверить что это строка.
// вы проверяете не пустая ли она. длина мин 4 макс 10. четность длины.

// function myFunction(str){
//   if(typeof str ==='string' && str.length>=4 && str.length<=10 && str.length%2===0){
//       return 'Это строка не пустая, где символ больше 4 и меньше 10, также она четная'
//   }
//   else if (str.length===0 || str.length%2 || str.length<4 || str.length>10){
//       return 'это пустая строка или нечетная, где длина меньше 4 и больше 10'
//   }
// }
// console.log(myFunction('jyldyz'))
// console.log(myFunction('dasta'))
// console.log(myFunction(''))