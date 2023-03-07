/** @format */

const addItem = () => {
  const value = document.getElementById("input").value;

  if (!value.trim(" ")) {
    alert("Please add something.");
    document.getElementById("input").value = "";
    return;
  }

  createNewItem(value);

  document.getElementById("input").value = "";
};

const createNewItem = (value) => {
  const list = document.getElementById("list");
  const item = document.createElement("li");

  // Assign unique id
  const uniqId = `${value}-` + new Date().getTime();
  item.setAttribute("id", uniqId);
  item.setAttribute("class", "item");
  item.innerText = value;


  const delBtn = document.createElement("div");
  delBtn.setAttribute("class", "cross");
  delBtn.onclick = () => {
    item.remove();
  }
  
  item.append(delBtn);
  list.append(item);
};


// for css purpose:
createNewItem("Grocery Shopping");
createNewItem("Wash Car");
createNewItem("go To Gym");
