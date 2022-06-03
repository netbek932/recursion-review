// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Declare container var
  var container = [];
  // Create helper function
  var checkElementsForClassName = function(element) {
    var children = element.children;
    // If the current descendant's class list contains the class name
    if (element.classList.contains(className)) {
      // Push the element to the container
      container.push(element);
    }

    // If there are child nodes
    if (children) {
      // Iterate child nodes
      for (var i = 0; i < children.length; i++) {
        // Implement recursive function on the current element
        checkElementsForClassName(children[i]);
      }
    }
  };

  // Call helper function on document body
  checkElementsForClassName(document.body);
  // Return container
  return container;
};
