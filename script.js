const inputEl = document.querySelector(".input");
const btn = document.querySelector(".btn");
const clearBtn = document.querySelector(".clear-btn");
const olist = document.querySelector(".ol-list");

btn.addEventListener("click", function () {
  console.log(inputEl.value);
  if (!inputEl.value) {
    return;
  } else {
    const listItems = document.createElement("li");
    listItems.textContent = inputEl.value;
    olist.appendChild(listItems);

    //alternative way of adding js to  html
    //   olist.innerHTML += `<li>${inputEl.value}</li>`;

    inputEl.value = "";
  }
});

clearBtn.addEventListener("click", function () {
  olist.textContent = "";
});
