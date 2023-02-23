/** @format */

const addItem = () => {
  const value = document.getElementById("input").value;

  if (!value) {
    alert("Please add something.");
    return;
  }

  createNewItem(value);

  document.getElementById("input").value = "";
};

const createNewItem = (value) => {
  const list = document.getElementById("list");
  const item = document.createElement("li");

  // Assign unique id
  const uniqId = "id" + new Date().getTime();
  item.setAttribute("id", uniqId);
  item.setAttribute("class", "item");
  item.innerText = value;

  const delBtn = document.createElement("img");

  delBtn.setAttribute("src", "/assets/close.svg");
  delBtn.setAttribute("class", "del-btn");
  delBtn.setAttribute("onclick", `deleteItem(${uniqId})`);
  item.append(delBtn);

  list.append(item);
};

const deleteItem = (id) => {
  id.remove();
};

// for css purpose:
createNewItem("test1");
createNewItem("test2");
createNewItem("test3");
