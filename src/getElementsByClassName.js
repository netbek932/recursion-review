// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var container = [];
  var checkElementsForClassName = function(element) {
    var children = element.children;
    if (element.classList.contains(className)) {
      container.push(element);
    }
    if (children) {
      for (var i = 0; i < children.length; i++) {
        checkElementsForClassName(children[i]);
      }
    }
  };
  checkElementsForClassName(document.body);
  return container;
};
