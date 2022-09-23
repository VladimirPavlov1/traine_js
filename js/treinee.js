
// const age = 14
// console.log (age)
// let userName = "Vasya"
// console.log( "His name is", userName)

// const message = "Mango " + "is" + " happy"
// // console.log (message)
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   const totalPrice =pricePerDroid*orderedQuantity
//     if(totalPrice>customerCredits){
//       message="Insufficient funds!"
//     }
//   else { message= `You ordered ${Number(orderedQuantity)}  droids, you have ${customerCredits - totalPrice} credits left"`}
//     return(console.log (message));
//   }
//   makeTransaction(5, 5, 100)
// function checkStorage(available, ordered) {
//     // Change code below this line

  
//     if (ordered === 0) {
        
//         return "Your order is empty!";
      
//     } 
//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";
     

// //    console.log(return);
//     // Change code above this line
// }
//    console.log( checkStorage(0, 50))
  
// function getExtremeElements(...array) {
//     // Change code below this line
//   const firstElement = array[0];
//     let lastElement=array.length-1
//     lastElement=array[lastElement]
//     return [firstElement, lastElement]
  
//     // Change code above this line
//   }
//   console.log(getExtremeElements(1,3,4,5,))
//   console.log(getExtremeElements('don','rest','tral','aloe','vera'))

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
 
   
//  message=message.split(" ").length
 
//    return message*pricePerWord
//     // Change code above this line
//  }
// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Change code below this line
  
//   string=array.join("");
  
//     // Change code above this line
//     return string;
//   }
//   console.log(makeStringFromArray(["M", "a", "n", "g", "o"],""))


// СТВОРЕННЯ SLUG
// function slugify(title) {
//         // Change code below this line
      
//       return title.toLowerCase().split(" ").join("-");
      
       
//         // Change code above this line
// }
  
//   console.log(slugify("Arrays for begginers"))


// МЕТОД SLICE
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls =fruits.slice(0,2);
// const nonExtremeEls =fruits.slice(1,4) ;
// const lastThreeEls =fruits.slice(-3) ;
// console.log(firstTwoEls);
// console.log( nonExtremeEls);
// console.log(lastThreeEls);



// // // ОБ'ЄДНАННЯ МАСИВІВ З ОБМЕЖЕННЯМ ДОВЖИНИ
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
  
// return firstArray.concat(secondArray);

// // array.length=maxLength;
// }
//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"]))

// //   const firstArray=["Mango", "Poly"];
// //   const secondArray=["Ajax", "Chelsea"];
// //  let Array=firstArray.concat(secondArray)
// //  Array.length=maxLength


// //  console.log(Array)



// // СУМА ПОЗИТИВНИХ ЧИСЕЛ (НЕ РОЗВ'ЯЗАНА)

// function positiveSum(arr) {
//     let total=0;
//     for(const value of arr){
//        console.log(value);
//         if(value>0){
            
//         total+=value
//         }
        
//     }
// }

// console.log( positiveSum([1,-4,7,12]))

// const arr =[1,-4,7,12];
// let total=0
// for(value of arr){
//     console.log(value);
// if (value>0)
// total+=value
// };
// console.log(total)





// let total=0
// const arr = [1,-4,7,12];
// for(let i=0; i<arr.length;i+=1){
//      console.log (arr[i]);
// if (arr[i]>0)
// total+=arr[i]};
// console.log(total)
 
// ПОВЕРНЕННЯ РЯДКА ДОВЖИНОЮ MAXLENGTH

// function makeArray(firstArray, secondArray, maxLength){ 
 
// return firstArray.concat(secondArray).slice(0,maxLength);

// }

// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));




// ІТЕРФЦІЯ ВІД START ДО END

// const start = 3;
// const end = 7;

// for (let i =3 ; i <=7 ; i += 1) {
//     console.log(i)
// }

// function calculateTotal(number){
 
// let total=0;   
// for(let i=0;i<=number;i+=1){
//   if(i/i===1){
//  total+=i};

//   }
//   return total;

// }
// console.log(calculateTotal(3));
   

   

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//   for(let i=0;i<order.length; i+=1){
//     order=order[i]
//     total+=[i]
//   }
//     // Change code above this line
//     return total;
//   }
//  console.log( calculateTotalPrice([12, 85, 37, 4]))



// СУММА ВСИХ ПРИМІТИВІВ МАСИВУ


// const order = [12, 85, 37, 4];
// let total =0;
//   for(const value of order){
// console.log(value);
//     total+=value
//     console.log(total)
// };
   
// //   


// НАЙДОВШЕ СЛОВО В РЯДКУ


// function findLongestWord(string) {
//     let words=string.split(" ")
//     console.log(words)
//     let longestWord="";
//     console.log(longestWord)
//     for(let word of words){
//         console.log(word)
//     if(word.length>longestWord.length){
//         longestWord=word
//     }}
      
            
          
   
//     console.log(longestWord)
//     return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))



// ПОВЕРНУТИ ВСІ ЦІЛІ ЧИСЛА ВІД MIN -MAX

// function createArrayOfNumbers(min, max) {
//     let numbers = [];
    
//     // Change code below this line
//   for(let i=min;i<=max;i+=1){
//  numbers.push(i)
//     console.log(numbers)
  
//   }
 

//     // Change code above this line
//     return numbers
// }
//   console.log(createArrayOfNumbers(7, 15))

// ПРИЙМАЄ МАСИВ - ПОВЕРТАЄ НОВИЙ

// function filterArray(numbers, value) {
//     // Change code below this line
//    newArray=[];
//  for(let i=value;i<numbers.length; i+=1){
//    let number=numbers[i];
//    if(number>value){
//     newArray.push(number);
//    }
  
  
//     }
   
 
//  return newArray;
 
//    // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))




// ПЕРЕВІРКА НА INCLUDES




// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//   const hasFruit=fruits.includes(fruit)
//     return hasFruit; // Change this line
// }

// console.log(checkFruit("plum"))
  
// ПОРІВНЯННЯ ДВОХ МАСИВІВ


// function getCommonElements(array1, array2) {
//     // Change code below this line
//   newArray=[];

// for(const number of array1){
//     console.log(number)
//     if(array2.includes(number)){
//         console.log(newArray.push(number))
//     }
// }
// return newArray
// }
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) 



// ФУНКЦІЯ ПОВЕРТАЄ МАСИВ ПАРНИХ ЧИСЕЛ ВІД START END (FN(START,END))

// function getEvenNumbers(start, end) {
//     // Change code below this line
//   let numbers=[];
//  for( let i=start;i<=end;i+=1)
//    if(i%2===0){
//      numbers.push(i);
//    }
 
//  return numbers;
//      // Change code above this line
//    }
//  console.log(getEvenNumbers(2, 5))

// ФУНКЦІЯ АНАЛОГ INCLUDES

// function includes(array, value) {
//     // Change code below this line
//   let isIncludes=false;
//     for(let element of array){
//   if(element===value){
//    isIncludes=true;
//     }
//   }
//     return isIncludes;
//     // Change code above this line
//   }
  
  
//   console.log(includes([1, 2, 3, 4, 5], 3))



// ЗМІНА ВЛАСТИВОСТЕЙ В ОБ'ЄКТІ


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola'
// apartment.tags.push("trusted");

// console.log(apartment.owner.name)


// FOR...IN ДЛЯ ОБ'ЄКТУ

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(key in apartment){
// console.log(key)
//    keys.push(key);
  
  
// }
// console.log(keys)
// for(value in apartment){
//   values.push(apartment[value])};
//   console.log(values)



// HASOWNPROPERTY() В МЕТОДІ

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line

  keys.push(key);
  values.push(apartment[key]);

  // Change code above this line
}

