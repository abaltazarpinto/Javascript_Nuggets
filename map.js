({
    babel: true
})

// MAP method
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