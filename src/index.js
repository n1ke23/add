import css from "./css/style.css";
// import './js/render.js'
// import './js/signUp.js'
import refs from './js/refs.js'
import debounce from 'lodash.debounce'

// const arr1 = [1, 2, 3, 4,5]

// function checkedEven(el){
//   if (el % 2 === 0) return el
// }

// function checkedOdd(el){
//   if (el % 2 !== 0) return el
// }

// function parseArr(array, num, count, cb){
//   let newArr = []
//   for(let i = num; i < array.length; i += count){
//     if(cb(array[i])){
//       newArr.push(array[i])
//     }
//   }
//   return newArr
// }

// console.log(parseArr(arr1, 0, 1, checkedEven))
// console.log(parseArr(arr1, 0, 1, checkedOdd))
// class Homo {
//   constructor(name, age, height){
//     // properties
//     this.name= name;
//     this.age=age;
//     this.height= height;
//   };
//   // methods
//   toDrink(drink){
//     console.log(drink)
//   };
//   toChangeAge(){
//     return this.age += 1
//   }
//   get x(){
//     return this.name
//   }
//   set x(val){
//     return this.name = val
//   }
// };

// const bagdasar = new Homo('Bagdasar', 23, 175)
// const zaychik = new Homo('zaychik', 22, 174)
// console.log(bagdasar)
// console.log(zaychik)
// console.log(bagdasar.toChangeAge())

// console.log(bagdasar.name)
// console.log(zaychik.name)

// console.log(bagdasar.age)

// const {name: bagName} = bagdasar
// console.log(bagName)

// const {name: zayName} = zaychik
// console.log(zayName)

// // import pnotify from 'pnotify'
// // pnotify.alert()

// // import {alert} from 'pnotify'
// // alert()

// const myArr = []

// function pushElems(arr, num){
//   for(let i = 1; i <= num; i++){
//     arr.push(`elem-${i}`)
//   }
//   return arr
// }
// console.log(pushElems(myArr, 5))

// const bc_24 = []

// refs.input.addEventListener('input', debounce((e)=>{
//   // console.log(e.target.value)
//   let elem = e.target.value;
//   console.log(elem)

//   bc_24.push(elem)

//   console.log(bc_24)

// }, 800))

// refs.signUpForm.addEventListener('submit', (e)=>{
//   e.preventDefault()
//   // console.dir(e.currentTarget)
//   // console.dir(e.currentTarget.elements)
//   console.dir(e.currentTarget.elements.login.value)
//   console.dir(e.currentTarget.elements.password.value)
//   // console.dir(e.target)
// })

refs.showBtn.addEventListener('click', (e)=>{
  console.dir(refs.passwordInput)
  let a = refs.passwordInput
  if(a.type === 'text'){
    a.type = "password"
  } else {
    a.type = "text"
  }
})
  
const buttonClose = document.createElement('button');
buttonClose.textContent = 'X'
buttonClose.classList.add('buttonClose-js');
refs.divForm.prepend(buttonClose);

refs.btnOpenModal.addEventListener('click', ()=>{
  refs.modalWindow.classList.add('is-open')
});
buttonClose.addEventListener('click', closeModal)
function closeModal (){
  refs.modalWindow.classList.remove('is-open')
}



