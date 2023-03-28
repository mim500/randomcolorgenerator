function generateColor() {
    // Generate random RGB values
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    // Set background color of color box
    var colorBox = document.querySelector('.color-box');
    colorBox.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  }
  