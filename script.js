/** @format */

// press Enter to focus the input field
document.addEventListener("keypress", (e) => {
  if(e.key == "Enter"){
    e.preventDefault();
    document.getElementById('input').focus();
  }
})

// while in the input field, press Enter to add new todo
const input = document.getElementById("input"); 
input.addEventListener("keypress", (e) => {
  if(e.key == "Enter"){
    e.preventDefault();
    document.getElementById('addBtn').click();
  }
})


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
