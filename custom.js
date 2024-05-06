// let cem=0
// for(let eded=1 ; eded<10; eded++){
//     if(eded%2==0){
//         cem+=eded;
//     }
// }
// console.log(cem);


// let text="salam ilk dersimiz html dir"


var str = 'salam ilk dersimiz html dir'
var _str = ''

for (let i = 0; i < str.length; i++) {
  let current = str[i]

  _str = current + _str
}

console.log(_str)