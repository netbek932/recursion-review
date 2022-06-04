// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return obj.toString();
  }
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null) {
    return 'null';
  }
  if (Array.isArray(obj)) {
    var arrContainer = [];
    _.each (obj, function(element) {
      if (typeof(element) === 'function' || element === undefined) {
      } else {
        arrContainer.push(stringifyJSON(element));
      }
    });
    return '[' + arrContainer + ']';
  }
  if (!Array.isArray (obj) && typeof(obj) === 'object') {
    var objContainer = [];
    var keys = Object.keys(obj);
    _.each(keys, function(key) {
      var value = obj[key];
      if (typeof(value) === 'function') {
        return;
      }
      if (value === undefined || key === undefined || value === undefined && key === undefined) {
        return;
      }
      objContainer.push(stringifyJSON(key) + ':' + stringifyJSON(value));
    });
    return '{' + objContainer + '}';
  }
};
console.log(typeof(stringifyJSON([1, 2, undefined, 3, function() { console.log('hi'); }, 4, 'hello', {1: 'hi'}, [true]])));