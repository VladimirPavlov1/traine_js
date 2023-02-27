// function switchItUp(number){
//   switch(number) {
//     case 0:
//       return 'Zero';
//     case 1:
//       return 'One';
//     case 2:
//       return 'Two';
//     case 3:
//       return 'Three';
//     case 4:
//       return  'Four';
//     case 5:
//       return 'Five';
//     case 6:
//       return 'Six';
//     case 7:
//       return 'Seven';
//     case 8:
//       return 'Eight';
//     case 9:
//       return 'Nine';
//     default:
//       return 'Unknown number';
//   }
// }
// // the best solutions
// switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]


function feast(beast, dish) {
const message=true;
const message2=false;
 const dishEqual = dish.toLowerCase();
 const beastEqual = beast.toLowerCase();
 if(beastEqual[0]===dishEqual[0]&&beastEqual[beastEqual.length-1]===dishEqual[dishEqual.length-1]){
 console.log(message)}else{
 
 

console.log(message2)}
 
}

 feast("great blue heron", "garlic naan");
feast("chickadee", "chocolate cake");
feast("brown bear", "bear claw");