function one_click() {
    console.log("1");
    let one = document.getElementById("one");
    one.style.backgroundColor = "red";
  }
  
  function two_click() {
    console.log("2");
  }
  
  function three_click() {
    console.log("3");
  }
  
  const one = document.getElementById("one");
  one.addEventListener("click", one_click);
  
  const two = document.getElementById("two");
  two.addEventListener("click", two_click);
  
  const three = document.getElementById("three");
  three.addEventListener("click", three_click);
  