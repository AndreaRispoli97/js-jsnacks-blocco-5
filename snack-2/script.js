const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi

people.forEach((element) => console.log(element.name));

//bonus
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
  
// }

// Risultato: 'Paolo', 'Giulia', 'Marco'