const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

const onlyAuthors = posts.map((posts) => {return posts.author});

console.log(onlyAuthors);

//bonus
// const onlyAuthors = [];

// for (let i = 0; i < posts.length; i++) {
//   onlyAuthors.push(posts[i].author);
  
  
// }
// console.log(onlyAuthors);



// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']