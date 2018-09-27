const peopleAndPets = [
  {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47,
      pets: [
          {
              name: "Alfred",
              type: "dog",
              nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
          },
          {
              name: "Charles",
              type: "cat",
              nickNames: ["Charley"]
          },
          {
              name: "Bark Obama",
              type: "dog",
              nickNames: ["Barack", "Mr. President"]
          },
          {
              name: "Christopher George Latore Wallace",
              type: "dog",
              nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
          }

      ]
  },
  {
      firstName: "Frank",
      lastName: "Zappa",
      age: 12,
      pets: [
          {
              name: "Howard",
              type: "dog",
              nickNames: []
          },
          {
              name: "Bear",
              type: "dog",
              nickNames: []
          }
      ]
  },
  {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78,
      pets: [
          {
              name: "Bird Person",
              type: "bird",
              nickNames: ["Phoenixperson"]
          },
          {
              name: "Krombopulos Michael",
              type: "Gromflomite",
              nickNames: ["Assassin man"]
          },
          {
              name: "Squanchy",
              type: "Cat-person",
              nickNames: ["Squanch", "Smarf", "Thunder Cat"]
          }

      ]
  },
  {
      firstName: "Morty",
      lastName: "Smith",
      age: 23,
      pets: [
          {
              name: "Morty Jr.",
              type: "Gazorpazorp",
              nickNames: ["Gwendolyn Jr."]
          },
          {
              name: "Snuffels",
              type: "dog",
              nickNames: ["Snowball"]
          }

      ]
  }
];

//Reduce array method to get the pet names only
  //loop through the array, run reduce, loop through pets, grab the names of the pets(for each or map) & accumulate to new array
const getPetNames = people => {
  // reduce the people into the pet names
  return people.reduce((petNamesArr, person) => {
    //loop thorugh pets
    const petNames = person.pets.map(pet => {
      return pet.name;
    })
    //return array that is a combo of pet names & the pet names array
    return[...petNamesArr, ...petNames];
  }, [])
}

getPetNames(peopleAndPets);


//condensed version of the above
const getPetNames = people => {
  const getPetNames = people => people.reduce((petNamesArr, person) => petNamesArr.concat(person.pets.map(pet => pet.name)), [])
}

getPetNames(peopleAndPets);

//get the pet nicknames
const getNicknamedPets = people => people.reduce((nicknamedPets, person) => nicknamedPets.concat(person.pets.filter(pet => pet.nickNames.length)), [])
console.log(getNicknamedPets(peopleAndPets));