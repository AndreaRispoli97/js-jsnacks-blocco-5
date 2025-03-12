const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const pari = nums.filter((num) => {
    if(num % 2 === 0) {
       return true;
    } 
    return false;
});

console.log(pari);


//bonus
// const num = [];
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] % 2 === 0){
//         num.push(nums[i]);
//     }
    
// }

//console.log(num);
// Risultato: [2, 8, 4, 12]