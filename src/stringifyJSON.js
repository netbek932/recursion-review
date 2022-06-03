// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //check if input is number
  //check if input is boolean
  if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return obj.toString();
  }
  //check if input is string
  if (typeof(obj) === 'string') {
    return obj;
  }
  //check if input is null
  if (obj === null) {
    return 'null';
  }


  //check if input array
  if (Array.isArray(obj)) {
    //create a container
    var arrContainer = [];
    //iterate through the input
    _.each (obj, function(element) {
      if (typeof(element) === 'function' || element === undefined) {
        console.log(element);
      } else {
        arrContainer.push(stringifyJSON(element));
      }
      //push stringifyJson of current element
    });
    //return string version of container
    console.log('arrContainer: ', arrContainer);
    return '[' + arrContainer + ']';
  }
  //check if input obj
  console.log('is obj', !Array.isArray(obj) && typeof(obj) === 'object');
  if (!Array.isArray (obj) && typeof(obj) === 'object') {
    //create a container
    var objContainer = [];
    //create array of keys
    var keys = Object.keys(obj);
    // console.log('keys: ', keys);
    //iterate through obj
    _.each(keys, function(element) {
      //declare a var with the value
      var value = obj[element];
      //check if obj is function
      if (typeof(value) !== 'function' || value !== undefined) {
        objContainer.push(stringifyJSON(element) + ':' + stringifyJSON(value));
      }
      // if (typeof(element) === 'function') {
      //   return;
      // }
      // //check if obj is undefined
      // if (typeof(element) === undefined) {
      //   return;
      // }
      console.log('element: ', element);
      console.log('value: ', value);
      // objContainer.push(stringifyJSON(element) + ':' + stringifyJSON(value));
    });
    //return string version of container
    return '{' + objContainer + '}';
  }
};
console.log(typeof(stringifyJSON([1, 2, undefined, 3, function() { console.log('hi'); }, 4, 'hello', {1: 'hi'}, [true]])));