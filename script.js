/** @format */

// press Enter to focus the input field
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    document.getElementById("input").focus();
  }
});

// while in the input field, press Enter to add new todo
const input = document.getElementById("input");
input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    document.getElementById("addBtn").click();
  }
});

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
  let item = document.createElement("li");

  // Assign unique id
  const uniqId = `${value}-` + new Date().getTime();
  item.setAttribute("id", uniqId);
  //   item.setAttribute("class", "item");
  item.classList.add("item");
  item.innerText = value;

  item = setDragging(item);

  const delBtn = document.createElement("div");
  delBtn.setAttribute("class", "cross");
  delBtn.onclick = () => {
    item.remove();
  };

  item.append(delBtn);
  list.append(item);
};

// give dragging properties
const setDragging = (item) => {
  item.draggable = true;

  // set opacity when dragged
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });

  return item;
};
// rearrange elements
const taskArray = document.getElementById("list");
taskArray.addEventListener("dragover", (e) => {
  e.preventDefault();
  const closest = getDragAfterElement(taskArray, e.clientY);
  const draggable = document.querySelector(".dragging");

  if (closest) {
    taskArray.insertBefore(draggable, closest);
  } else {
    taskArray.appendChild(draggable);
  }
});

const getDragAfterElement = (container, y) => {
  const placeableElements = [
    ...container.querySelectorAll(".item:not(.dragging)"),
  ];

  return placeableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};

// EYEBALL MOVEMENT
document.addEventListener("mousemove", (e) => {
  // mouse position
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // center anchor position
  const anchor = document.getElementById("anchor");
  const rekt = anchor.getBoundingClientRect();

  const anchorX = rekt.left + rekt.width / 4;
  const anchorY = rekt.top + rekt.height / 4;

  const deg = getAngle(mouseX, mouseY, anchorX, anchorY);
  //   console.log(deg);

  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${deg+170}deg)`;
    console.log(eye.style);
  });
});

const getAngle = (mx, my, ax, ay) => {
  const dx = mx - ax;
  const dy = my - ay;

  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;

  return deg;
};

// for css purpose:
createNewItem("Grocery Shopping");
createNewItem("Wash Car");
createNewItem("go To Gym");
