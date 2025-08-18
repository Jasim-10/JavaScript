// getElementById is a method in JavaScript that is used to select an HTML element by its id attribute.
// getElementsByClassName is a JavaScript method that selects all elements with the same class name

let smallImages = document.getElementsByClassName("oldImg");
for (let i=0;i<smallImages.length;i++){
    console.dir(smallImages[i].src);
}



// getElementsByTagName is a JavaScript method used to select all HTML elements with a given tag name (like p, div, h1, etc).

