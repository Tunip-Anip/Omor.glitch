// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
var pages = ["Plot.html","","",]


const btnn = document.getElementById("somt"); // Get the button from the page
if (btnn) {
  // Detect clicks on the button
  btnn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    // btn.classList.toggle("dipped");
    btnn.src =
      "https://cdn.glitch.global/6eca133f-bf1e-45fc-b924-8892659d88c7/ezgif.com-webp-to-gif-converter.gif?v=1737085165377";
    function pausegif() {
      btnn.src =
        "https://cdn.glitch.global/6eca133f-bf1e-45fc-b924-8892659d88c7/ezgif.com-animated-gif-maker.gif?v=1737086054827"};
    function next(){
      document.location.href = "Plot.html";
    }
    const mytimeout = setTimeout(pausegif, 700);
    const mytimeout2 = setTimeout(next, 800);
    document.getElementById("White").loop = true; 
    
  };
}

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
    "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => {
    goto(f.dataset.file, f.dataset.line);
  };
});
var audio = document.getElementById("battle");
      audio.play(); 
var audio = document.getElementById("White");
      audio.play();
