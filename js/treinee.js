
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

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key])};

//   // Change code above this line
// }
// console.log(keys);
// console.log(values);

// ПІДРАХУНОК ВЛАСТИВОСТЕЙ ОБ'ЄКТА


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// const values = Object.values(object);
// for(value of values){
//     console.log(value)
//     propCount+=1
// }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))
  
//  const object = {name: "Mango", age: 2, date:15,};
//  let propCount = 0;
//  const keys=Object.keys(object);
//  console.log(keys);
// for(const key of keys){
//   propCount+=1;
// }

//  console.log(propCount)



// // ПЕРЕБІР МАСИВУ ОБ'ЄКТІВ

// const hexColors = [];
// const rgbColors = [];
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// console.table(colors)
// for(const color of colors){
//   console.log(color.hex)
//   hexColors.push(color.hex)};
 

 

// console.table(hexColors)

// ПРИЙМАЄ ПРОДУКТ ПОВЕРТАЄ ЦІНУ


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for(const product of products){

//   if(productName===product.name){
//     return product.price };
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Radar")); 
// console.log(getProductPrice("Grip")); 
// console.log(getProductPrice("Scanner")); 
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// ФУНКЦІЯ ПРИЙМАЄ ПАРАМЕТР "КЛЮЧ" А ПОВЕРТАЄ МАСИВ ВСІХ ЗНАЧЕНЬ ВЛАСТИВОСТІ

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//   // Change code below this line
//   let array=[];
// for(const product of products){

//   const keys=Object.keys(product)
//   for(let key of keys){

//   if(propName===key){
//      array.push(product[propName])
//   }
// }
// }
// return array;
// }

//   // Change code above this line

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// ФУНКЦІЯ ПРИЙМАЄ ОДИН ПАРАМЕТР І ПОВЕРТАЄ ВАРТІСТЬ ВЛАСТИВОСТІ  З ЗАДАНИМ І'ЯМ

/**
 * PARAM productName
 * RETURN TOTAL
/** */

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// let total=0;
// for(const product of products){

// if(product.name===productName){
//   total=product.price*product.quantity;
// }

// }

// return total;
// }


 

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТУ 

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday, today, tomorrow} = highTemperatures

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

/**
 * 
// //  * @param {*} forecast { today: { low: 10, high: 20 },
// //   tomorrow: { low: 20, high: 30 }
// // }}
// //  * @returns
// //середня температура  */

// const forecast= { today: { low: 10, high: 20 },
//        tomorrow: { low: 20, high: 30 }};

// function calculateMeanTemperature(forecast) {
//   const{today:{low:todayLow, high:todayHigh}, tomorrow:{low:tomorrowLow, high:tomorrowHigh}} = forecast;


//   // Change code above this line
  
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;)
// 






// const completed = false;
// const category = "General";
// const priority = "Normal";

// function makeTask(data) {
// return{completed, category, priority,...data}
//   // Change code below this line

//   // Change code above this line
// }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })) 

// // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false })




// ПОВЕРТАЄ СУММУ АРГУМЕНТІВ
// function add(...args) {
//   let total=0;
//   for(const arg of args){
//     console.log(arg)
//     total+=arg;
//   }
//   return total  
//   }

  
//   console.log(add(12, 4, 11, 48))


// ПРИЙМАЄ ДОВІЛЬНУ КІЛЬКІСТЬ АРГУМЕНТІВ ПОВЕРТАЄ МАСИВ ОДНАКОВИХ ЧИСЕ



// // Change code below this line
// function findMatches(firstArgs, ...args) {
//   const matches = []; // Don't change this line
//   for(const arg of args){
//     if(firstArgs.includes(arg))
//     matches.push(arg)
// }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41))



// const Args = [10, 24, 41, 6, 9, 19]
// const firstArgs = Args[0];
// console.log(firstArgs)
// console.log(...Args)

// const str=["Mango","Kivi","Poly","Ajax"]
// console.log(str)
// const newStr = str[str.length -1];
// console.log(newStr)





// ВИДАЛЯЄ СТАРУ КНИГУ ДОДАЄ НОВУ



// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const idx=this.books.indexOf(oldName);
//     console.log(idx)
//     console.log(this.books.splice(0,1,newName));
//       return this.books;

//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("The last kingdom", "Dune")) 
// // значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"])


// // МЕТОД  ПОВЕРТАЄ ВСІ ВЛАСТИВОСТІ ОБ'ЄКТА 


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
  
//   getPotions() {
   
//     return this.potions;
    
//   },
// }


// ОБ'ЄКТ ТА ЙОГО МЕТОДИ


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for(const potion of this.potions)
//     if(potion.name===newPotion.name){
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);

//   },
//   removePotion(potionName) {
//     for(i=0; i<this.potions.length; i+=1){
//       if(this.potions[i].name===potionName){
//         this.potion.splice(i,1)
//         return;
//       }
//       return `Potion ${potionName} is not in inventory!`;
//     }
   


//   },
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potions){
//       if(potion.name===oldName){
//         potion.name=newName;
//         return this.potions;
//       }
//     }
 
//   },
//   // Change code above this line
// };



// // console.log(atTheOldToad.getPotions())
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// // console.log(atTheOldToad.removePotion("Dragon breath"))


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))

// ДЕЯКІ МЕТОДИ МАСИВУ

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// ЦИКЛ FOR ...IN

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];
// const bookNames=[];
// for(const book of books){
//   console.log(book);
//   bookNames.push(book.title);
//   console.log(book.title);
// }
// console.log(bookNames)


// ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТУ

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book);
// //   console.log(book.title);
// //   console.log(book.author);
// //   console.log(book.rating);
// }

// // Для того, щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   // console.log(author);
//   // console.log(rating);
// }

// Якщо в об'єкті небагато властивостей, можна виконати деструктуризацію безпосередньо у місці оголошення змінної book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// КОЛБЕКИ


// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result =  makePizza();
// const pointer = makePizza;


// console.log(result);
// console.log(pointer);


// const pizzas = ["Ultracheese", "Smoked", "Four meats"];
//  const pizzaInc= !pizzas.includes("Smoked")
// console.log(pizzaInc)


// МЕТОД FOREACH

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//    orderedItems.forEach(function(item){
//     totalPrice += item;
//    });

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// // повертає 1116



// МЕТОД FOREACH І СТРІЛОЧНІ ФУНКЦІЇ


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line


// console.log(calculateTotalPrice([164, 48, 291])) 
// // повертає 503



// ЧИСТІ ФУНКЦІЇ(ПОВЕРНЕННЯ НОВОГО МАСИВУ ЗА УМОВОЮ)

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray =[];
//  numbers.forEach((number) => {
  
//   if(number %2===0){
//     number=number+value;
//   }
//    newArray.push(number);
//  })
//  return newArray;
 
// }
 
//   // 
//   // for (let i = 0; i < numbers.length; i += 1) {
//   // //   if (numbers[i] % 2 === 0) {
//   // //     numbers[i] = numbers[i] + value;
//   // //     newArray.push(numbers[i])
//   // //   }
//   // // }




// МЕТОД MAP()

// console.log(changeEven([1, 2, 3, 4, 5], 10))
// //  повертає новий масив [1, 12, 3, 14, 5]



// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet=>planet.length);


// console.log(planetsLengths)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book)=>book.title);

// console.log(titles)


// МЕТОД FLATMAP



