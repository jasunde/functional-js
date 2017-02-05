function outer() {
    var name = "Kyle Simpson";
    return middle();

    // ********************

    function middle() {
        var street = "123 Easy St";
        var city = "JS'ville";
        var state = "ES";

        return function inner(){
            return [name,street,city,state];
        };
    }
}

var person = outer();

console.log(person());

function createPerson(firstName, lastName) {
  return API;

  function API(methodName) {
    switch(methodName) {
      case 'first':
        return first();
        break;
      case 'last':
        return last();
        break;
    }
  }

  function first() {
    return firstName;
  }

  function last() {
    return lastName;
  }
}

var me = createPerson('Jason', 'Sunde');

console.log(`I've got a name and that name is ${me('first')} ${me('last')}`);
