
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


// // МЕТОД FLATMAP


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book=>book.genres);
// console.log(genres)
// console.log(books)





// const  users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserNames = users.map(user=>user.name);
// console.log(users)
// console.log(getUserNames)


// МЕТОД FILTER() END INDEXOF


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book=>book.genres);
// console.log(allGenres)
// const uniqueGenres = allGenres.filter((element,index,allGenres)=>(allGenres.indexOf(element)===index));
// console.log(uniqueGenres)

// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// console.log(users)



// const getFriends = (users.flatMap(user=>user.friends)).filter((friend,index)=>(index===(users.flatMap(user=>user.friends)).indexOf(friend)))

// console.log(getFriends)



// const getFriends = users => (users.flatMap(user=>user.friends)).filter((friend,index,array)=>(index===array.indexOf(friend))




// МЕТОД REDUCE


// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   console.log(previousValue)
//   // console.log(number)
//   return previousValue + number;
// }, 0);

// console.log(total)



// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line



// const totalAveragePlaytimePerGame = players.reduce((totalTime,player)=>{return totalTime+ player.playtime/player.gamesPlayed}
// ,0);
// console.log(totalAveragePlaytimePerGame)

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const getTotalFriendCount = users => 
//   users.reduce((total,user)=>
//   {return total + user.friends.length},0);

//   console.log(getTotalFriendCount)


// МЕТОД SORT



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

// const sortedByAuthorName = books.sort((firstbook,secondbook)=>firstbook.author-secondbook.author);

// const sortedByReversedAuthorName = books.flatMap(book=>book.author).sort((firstBook,secondBook)=>firstBook.localeCompare(secondBook)).filter((element,index,array)=>array.indexOf(element)===index);


// const sortedByAscendingRating = books.sort((firstBook,secondBook)=>firstBook.rating-secondBook.rating);

// const sortedByDescentingRating  =  books.sort((firstBook,secondBook)=>secondBook.rating-firstBook.rating);

// console.log(sortedByAuthorName );
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);



// МЕТОД SORT I MAP


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
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].sort((first,second)=>first.rating-second.rating).map(book=>book.author);

// console.log(names)




// ЧЕНІНГ

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
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(book => book.rating>MIN_BOOK_RATING).map(book=>book.author).sort((first,second)=>first.localeCompare(second))
// // .sort((first,second)=>first.author.localeCompare(second.author))
// // map(book=>book.author)
// // .filter(book => book.rating>8);


// console.log(names)

// const users =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).


// const getNamesSortedByFriendCount  = 
//    [...users].sort((first,second)=>first.friends.length-second.friends.length).map(user=>user.name);


// console.log(users)
// console.log(getNamesSortedByFriendCount)

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.

// const getSortedFriends =  
   
//    [...users].flatMap(user=>user.friends)
//    .filter((friend,index,array)=>array
//    .indexOf(friend)===index).sort();

//    console.log(getSortedFriends)


const users =[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// const getTotalBalanceByGender= 
//   [...users].filter(user=>user.gender==='female').flatMap(user=>user.balance).reduce((total,number)=>{
//     return total+number;},0);
  

//   console.log(getTotalBalanceByGender)
//   // const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   //   return previousValue + number;
//   // }, 0);


// THIS!!!!


// ПРОТОТИПИ

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// console.log(child.heritage)



// class Storage{
//   constructor(arr){
//     this.items = arr;
//   }
//   getItems(items){
//     return this.items;
//   }
//   addItem(newItem){
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove){
//      if(this.items.includes(itemToRemove)){
//        const indx=this.items.indexOf(itemToRemove);
//        this.items.splice(indx,1);
//      }
//   }
// };

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
// Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class Car {
//   // Change code below this line
//   #price;
// static= {MAX_PRICE:50000}

//   constructor(price){
//     this.#price = price;
//   }
  

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(this.#price<=Car.MAX_PRICE)
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// const SuperCar= new Car( 51000)
// console.log(SuperCar)


// CODEWARS ЗАДАЧІ
// СУММА ВСІХ ПОЗИТИВНИХ ЧИСЕЛ
// function positiveSum(arr) {
//   let sum=0;
//   for(const number of arr){
//     console.log(number)
//     if(number>0){
//       sum+=number
//     }
//   }
//   return sum
//  }
// console.log(positiveSum([1,2,3,4,5]))



// Підсумуйте всі числа даного масиву ( cq. list ), крім найвищого та найнижчого елементів (за значенням, а не за індексом!).
// Найвищий або найнижчий елемент, відповідно, є одним елементом на кожному краю, навіть якщо їх більше одного з однаковим значенням.



// function sortNumsAsc(arr) {
//   if(arr === null || arr === []) {
//       return [];
//   }
//   else {
//   return arr.sort(function(a,b){return a-b});
//   //return newarr;
//   }
// }

// function sumArray(array){
//   if(array===null||array===[]){return 0;}
//    const newArray=array.sort((a,b)=>(a-b))
   
//    const slArray=newArray.slice(1,array.length-1);
   
//   let total=0;
//   for(const number of slArray){
 
//  total+=number;
 
//   }
//   return total;
 
//  }

// function sumArray(array){
  
//   for(let k=0;k<array.length;k+=1){
//     console.log(array)
//     for(let i=0;i<array.length;i+=1){
//       if(array[i]>array[i+1]){
//         [array[i],array[i+1]=array[i+1],array[i]];
//         console.log(array)
//       }
//     }
   
//   }
  
//   return array
// }

// function sumArray(array) {
//   if (array == null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   } else {
//     array = array.sort(function(a,b) {return a - b;});
//     var total = 0;
//     for (var i = 1; i < array.length - 1; i++) {
//       total += array[i];
//     }
//     return total;
//   }
// }
// // (Альтернативний)sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


// console.log(sumArray(null))                             
// console.log(sumArray([ ]))                              
// console.log(sumArray([ 3 ]))                            
// console.log(sumArray([ 3, 5 ]))                         
// console.log(sumArray([ 6, 2, 1, 8, 10 ]))               
// console.log(sumArray([ 0, 1, 6, 10, 10 ]))              
// console.log(sumArray([ -6, -20, -1, -10, -12 ]))         
// console.log(sumArray([ -6, 20, -1, 10, -12 ]))          

// function sum (numbers) {
//   "use strict";
//   let total=0;
// for(const number of numbers){
//   total+=number*10
// }
//   return total/10
  
// };

// // (Альтернатива )function sum(numbers) {
// //   return numbers.reduce((a, b) => a + b, 0);
// // }
// console.log(sum([]));
// console.log(sum([1, 5.2, 4, 0, -1]));

const array = [1,2,3,4,5,6,7,8,9,10,-1,-2,-3,0]

function countPositivesSumNegatives(input) {
  // your code here
  let positiveNumber=[];
  let countPosNum=positiveNumber.length
  let negativeNumbers=0;
  let result=[];
  for(const number of input){
    if(number>0){
      positiveNumber.push(number)
      console.log(positiveNumber)
    }
    else if(number<0){
      negativeNumbers+=number
    }
    
  }
  return result = [countPosNum,negativeNumbers]
}


console.log( countPositivesSumNegatives(array))