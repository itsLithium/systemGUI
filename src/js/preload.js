const si = require('systeminformation');

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }

    // promises style - new since version 3
  si.cpu()
  .then(data => {
    if (data.manufacturer == "Intel"){
      var img = document.createElement("img");
      img.src = "./assets/cpu/processor-intel-black.svg";
      var src = document.getElementById("cpu-content");
      src.appendChild(img);
    }else{
      var img = document.createElement("img");
      img.src = "./assets/cpu/processor-amd-black.svg";
      var src = document.getElementById("cpu-content");
      src.appendChild(img);
    }
  })
  .catch(error => console.error(error));

  })