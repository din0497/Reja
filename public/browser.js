const itemTemplate = (item) => {
  return ` <li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
  >
    <span class="item-text">${item.reja}</span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1"
      >
        Ozgartirish
      </button>
      <button
        data-id="${item._id}"
        class="delete-me btn btn-danger btn-sm"
      >
        Ochirish
      </button>
    </div>
  </li> `;
};

let createField = document.getElementById("create-field");
const ul = document.getElementById("item-list");

document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log(err, "qayta harakat qil");
    });
});

document.addEventListener("click", (e) => {
  /// delete
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Jonibek o`chirurib zerikdizmi ?"))
      axios
        .post("delete-item", { id: e.target.dataset.id })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log(err, "qayta harakat qil");
        });
  }
  /// edit
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Please update?",
      e.target.parentElement.parentElement.querySelector(".item-text").innerText
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.dataset.id,
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerText = userInput;
        })
        .catch((err) => {
          console.log("qayta harakat qil");
        });
    }
  }
});

document.getElementById("clear-all").addEventListener("click", () => {
  axios
    .post("/delete-all", { delete_all: true })
    .then((response) => {
      console.log('Step 1');
      alert(response.data.state);
      console.log('Step 3');
      ul.remove();
    })
    .catch((err) => {
      console.log("Something went wrong!");
    });
});
