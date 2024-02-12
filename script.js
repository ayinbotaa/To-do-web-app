const inputEl = document.querySelector(".input");
const btn = document.querySelector(".btn");
const clearBtn = document.querySelector(".clear-btn");
const olist = document.querySelector(".ol-list");

function updateList() {
  const listItems = document.createElement("li");
  listItems.textContent = inputEl.value;
  olist.appendChild(listItems);

  //alternative way of adding js to  html
  //   olist.innerHTML += `<li>${inputEl.value}</li>`;

  inputEl.value = "";
}

function pressEnterToSubmit() {
  document.addEventListener("keydown", function (enter) {
    if (enter.key === "Enter" && inputEl.value) {
      updateList();
    } else {
    }
  });
}

btn.addEventListener("click", function () {
  console.log(inputEl.value);
  if (!inputEl.value) {
    return;
  } else {
    updateList();
    pressEnterToSubmit();
  }
});

clearBtn.addEventListener("click", function () {
  olist.textContent = "";
});
