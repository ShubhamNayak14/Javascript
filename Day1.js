//JS HTML DOM ELEMENT
//DOM -> Document Object Model

//The getElementById Method

<html>
  <body>
    <p id="demo"></p>

    <script>document.getElementById("demo").innerHTML = "Hello World!";</script>
  </body>
</html>;

//In the example above, getElementById is a method, while innerHTML is a property.

// The getElementById Method
// The most common way to access an HTML element is to use the id of the element.
// In the example above the getElementById method used id="demo" to find the element.

// The innerHTML Property
// The easiest way to get the content of an element is by using the innerHTML property.
// The innerHTML property is useful for getting or replacing the content of HTML elements.

// <!DOCTYPE html>
// <html>
// <head>
// <script>
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
// </script>
// </head>
// <body>

// <h2>JavaScript Validation</h2>

// <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
//   Name: <input type="text" name="fname">
//   <input type="submit" value="Submit">
// </form>

// </body>
// </html>
