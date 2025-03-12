const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'

// const classMarco = students.find((classe) => classe.class);

// console.log(classMarco.class)

//bonus
let foundStudent = [];
for (let i = 0; i < students.length; i++) {
  if(students[i].name == ('Marco Lanci')){
    foundStudent = students[i]//.class;
  }
  
}
console.log(foundStudent.class);
// Risultato: '3C'