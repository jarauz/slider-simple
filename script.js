let slider1 = document.getElementById("myRange1");
let output1 = document.getElementById("demo1");
let res12 = document.getElementById("result12");
output1.innerHTML = slider1.value; // Display the default slider value


let slider2 = document.getElementById("myRange2");
let output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; // Display the default slider value
r = Number(slider1.value) + Number(slider2.value);
res12.innerHTML = `x + y = ${r}`

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  output1.innerHTML = this.value;
r = Number(slider1.value) + Number(slider2.value);
  res12.innerHTML = `x + y = ${r}`
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
r = Number(slider1.value) + Number(slider2.value);
  res12.innerHTML = `x + y = ${r}`
}



