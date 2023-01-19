({
    babel: true
})

//MAP method
const people = [ 
    {
        name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
    },
    {
        name: 'susy',
        age: 30,
        position: 'the boss',
    },
];

// Quokka.js - Extension 
// returns always a new array
// does not change the size of origianl array ( unlike filter )
// uses values from original array when making a new one

const getAges = (person) => person.age * 2

const ages = people.map((getAges));

/*
const ages = people.map((person) => {
    console.log(person.age)
    return person.age * 2
});*/

console.log(ages) 

const newPeople = people.map((item) => {
return {
    firstName:item.name.toUpperCase(),
    oldAge: item.age + 20
}
})

console.log(newPeople)

const names = people.map((person) => `<h1>${person.name}</h1>`);

const result = document.querySelector('#result');

result.innerHTML = names.join(' '); 

