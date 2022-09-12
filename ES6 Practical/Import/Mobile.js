class Display {
  show() {
    console.log("Hello World :)");
  }
  trail1 = () => {
    console.log("Aaa");
  } 
}

class Screen extends Display {
  trail1 = () => {
    console.log("Bbb");
  } 
}
function javaT() {
  console.log("Welcome to COMP 229");
}
export { Display, Screen, javaT };
