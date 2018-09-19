//FILTER through ages
//FILTER will return a boolen, if it is true it will go into the new array
function getOlderThan18(people) {
  return people.filter(function(person){
    return person.age >= 18;
  })
}

//SORT the above >18 by last name
//NOTE:  SLICE will may a copy of the original way so that sort doesn't mutate the original array
//SORT parameters are a, b - you're just defining with a, b which comes first
//NOTE:  localCompare compares two full strings
function sortOldPeople(oldPeople) {
  return oldPeople.slice().sort(function(a, b){
    return a.lastName.localeCompare(b.lastName);
  })
}

//MAP - Return each name and age with <li>'s
//MAP is non-destructive & will always return the same number of items as the original array (a one to one relationship)
//MAP returns a value
function listPeople(people) {
  return people.map(function(person) {
    return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>";
  })
}


module.exports = {
  getOlderThan18: getOlderThan18,
  sortOldPeople: sortOldPeople,
  listPeople: listPeople
}
