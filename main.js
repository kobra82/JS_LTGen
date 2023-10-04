const bottone = document.querySelector("#button");
bottone.focus();
const tpt = document.querySelectorAll(".outputlayout");
let vettore = [];

function genera() {
  let i = 0;
  do {
    let unique = true;
    num = Math.floor(Math.random() * 90) + 1;
    for (j = 0; j < vettore.length; j++) {
      if (vettore[j] == num) unique = false;
    }
    if (unique == true) {
      vettore[i] = num;
      i++;
    }
  } while (vettore.length < 6);
  vettore.sort((a, b) => a - b);
  for (let k = 0; k < vettore.length; k++) tpt[k].value = vettore[k];
  vettore = [];
}

bottone.addEventListener("click", genera);
